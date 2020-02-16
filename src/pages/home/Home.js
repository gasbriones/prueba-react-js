import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col} from 'reactstrap';

const Home = (props) =>  {
    const {language: {currentLanguage}} = props;
    return (
        <Col md='12' className='p-0'>
            <iframe src={currentLanguage.iframeUrl} frameBorder='0' width='100%' height='100%' />
        </Col>
    );
};

Home.defaulProps = {
    history: {},
    language: {}
};

Home.propTypes = {
    history: PropTypes.object,
    language: PropTypes.object
};

const mapStateToProps = state => {
    const {data, language} = {...state};

    return {
        data,
        language
    }
};

export default connect(mapStateToProps)(Home)

