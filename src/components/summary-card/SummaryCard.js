import React from "react";
import PropTypes from "prop-types";
import {Col, Row} from "reactstrap";
import {IMG_EXTENSION} from "../../constants/constants";
import './style.scss'


const SummaryCard = (props) => {
    const {data} = props;
    return (
        <Row className='card-view'>
            <Col sm='4'>
                <img src={data.urlImagePath + '/' + data.model + '.' + IMG_EXTENSION}/>
            </Col>
            <Col sm='8'>
                <h4>{`${data.brand} ${data.model}`}</h4>
            </Col>
        </Row>
    )
};

SummaryCard.defaulProps = {
    data: {}
};

SummaryCard.propTypes = {
    data: PropTypes.object
};

export default SummaryCard;