import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col, Row} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

import './style.scss';
import {DATA_PATH, DESKTOP, LAPTOP, EMPTY_TABLE} from "../../constants/constants";
import CustomCarousel from "../../components/carousel/carousel";

const Table = (props) =>  {
    const {language: {literals}} = props;

    const [desktopComputers, setDesktopComputers] = useState([]);
    const [laptopComputers, setLaptopComputers] = useState([]);

    const getData = () => {
        fetch(DATA_PATH)
            .then((res) => res.json())
            .then (data => {
                const desktop = data.filter(x => x.shape === DESKTOP.toLowerCase());
                const laptop = data.filter(x => x.shape === LAPTOP.toLowerCase());
                setDesktopComputers(desktop);
                setLaptopComputers(laptop);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    const options = {
        sortIndicator: true,
        sizePerPage: 5,
        hidePageListOnlyOnePage: true,
        alwaysShowAllBtns: false,
        withFirstAndLast: false,
        sizePerPageList: [5, 15, 25],
        noDataText: EMPTY_TABLE,
        bordered: false,
    };

    return (
        <Col md='12' className='table-view'>
            <Row className='justify-content-center'>
                <h3 className='table-view__title col-sm-12'>{literals.DESKTOP_TABLE_TITTLE}</h3>
                <BootstrapTable
                    data={desktopComputers}
                    version="4"
                    bordered={false}
                    hover
                    pagination
                    options={options}
                    striped={false}
                    containerClass='data-table col-10'
                    keyField='_id'
                    search
                    exportCSV
                    height='auto'
                >
                    <TableHeaderColumn dataField="brand" dataSort search>{literals.BRAND}</TableHeaderColumn>
                    <TableHeaderColumn dataField="model" dataSort>{literals.MODEL}</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataSort>{literals.PRICE}</TableHeaderColumn>
                    <TableHeaderColumn dataField="cpu" dataSort>{literals.CPU}</TableHeaderColumn>
                    <TableHeaderColumn dataField="ram" dataSort>{literals.RAM}</TableHeaderColumn>
                    <TableHeaderColumn dataField="type" dataSort>{literals.TYPE}</TableHeaderColumn>
                    <TableHeaderColumn dataField="shape" dataSort>{literals.SHAPE}</TableHeaderColumn>
                </BootstrapTable>
                <Col sm='12'>
                    <Row className='justify-content-center'>
                        <h3 className='table-view__title col-sm-12'>{literals.LAPTOP_CAROUSEL_TITTLE}</h3>
                        <Col sm='10'>
                            <CustomCarousel items={laptopComputers} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};

Table.defaulProps = {
    history: {},
    language: {}
};

Table.propTypes = {
    history: PropTypes.object,
    language: PropTypes.object
};

const mapStateToProps = state => {
    const {language} = {...state};

    return {
        language
    }
};

export default connect(mapStateToProps)(Table)

