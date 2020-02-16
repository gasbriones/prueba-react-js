import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Card, CardBody, Row, Col } from 'reactstrap';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    DATA_PATH,
    GAMING,
    MULTIMEDIA,
    PRICE,
    WORKSTATION
} from "../../constants/constants";
import './style.scss';
import SummaryCard from "../../components/summary-card/SummaryCard";


const Summary = (props) =>  {
    const {language: {literals}} = props;
    const [data, setData] = useState([]);
    const [totalByType, setTotalByType] = useState([]);
    const [cheapestComputer, setCheapestComputer] = useState([]);
    const [expensiveComputer, setExpensiveComputer] = useState([]);
    const [favoriteComputer, setFavoriteComputer] = useState([]);


    const getData = () => {
        fetch(DATA_PATH)
            .then((res) => res.json())
            .then (data => {

                const gaming = data.filter(x => x.type === GAMING.toLowerCase());
                const workstation = data.filter(x => x.type === WORKSTATION.toLowerCase());
                const multimedia = data.filter(x => x.type === WORKSTATION.toLowerCase());

                const price = data.map(p => p.price);
                const minPrice = Math.min(...price);
                const maxPrice = Math.max(...price);

                const mostCheap = data.filter(x => parseInt(x.price) === minPrice);
                const mostExpensive = data.filter(x => parseInt(x.price) === maxPrice);

                setData(data);
                setTotalByType([gaming.length,workstation.length, multimedia.length]);
                setCheapestComputer(mostCheap[0]);
                setExpensiveComputer(mostExpensive[0]);
                setFavoriteComputer(data[4]);

            })
    };


    const line = {
        labels: data.map(row => row.model),
        datasets: [
            {
                label: PRICE,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: data.length,
                data: data.map(row => row.price),
            },
        ],
    };

    const doughnut = {
        labels: [
            GAMING,
            WORKSTATION,
            MULTIMEDIA,
        ],
        datasets: [
            {
                data: totalByType,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                ],
            }],
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Col md='12' className='summary-view'>
            <Row className='justify-content-center'>
                <h3 className='summary-view__title col-sm-12'>{literals.SUMMARY}</h3>
                <Col sm='12' className='mb-4'>
                    <Row>
                        <Col sm='4'>
                            <Card className='card-1'>
                                <CardBody>
                                    <h6>{literals.CHEAPEST}</h6>
                                    <SummaryCard data={cheapestComputer}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm='4'>
                            <Card className='card-2'>
                                <CardBody>
                                    <h6>{literals.EXPENSIVE}</h6>
                                    <SummaryCard data={expensiveComputer}/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm='4'>
                            <Card className='card-3'>
                                <CardBody>
                                    <h6>{literals.FAVOURITE}</h6>
                                    <SummaryCard data={favoriteComputer}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col sm='6'>
                    <Card>
                        <CardBody>
                            <div className="chart-wrapper">
                                <Line data={line} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardBody>
                            <div className="chart-wrapper">
                                <Doughnut data={doughnut} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>
    );
};

Summary.defaulProps = {
    language: {}
};

Summary.propTypes = {
    language: PropTypes.object
};

const mapStateToProps = state => {
    const {language} = {...state};

    return {
        language
    }
};

export default connect(mapStateToProps)(Summary)

