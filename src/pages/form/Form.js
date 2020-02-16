import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Col, Row, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import * as Constants from '../../constants/constants';
import './style.scss';

const FormView = (props) => {
    const {language: {literals}} = props;

    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [price, setPrice] = useState(null);
    const [cpu, setCpu] = useState(null);
    const [ram, setRam] = useState(null);
    const [type, setType] = useState(null);
    const [shape, setShape] = useState(null);

    const onSubmit = () => {

        if (brand && model && price && cpu && ram && type && shape){
            const computer = {
                brand : brand,
                model : model,
                price : price,
                cpu : cpu,
                ram : ram,
                type : type,
                shape : shape,
                urlImagePath: Constants.IMAG_ROOT_PATH + shape + '/' + brand
            };
            console.log('New Computer -->', computer);
        }
    };

    return (
        <Col md='12' className='form-view'>
            <Row className='justify-content-center'>
                <h1 className='form-view__title col-sm-12'>{literals.FORM_TITTLE}</h1>
                <Form className='form-view__form col-sm-6'>
                    <FormGroup>
                        <Label>{literals.BRAND}</Label>
                        <Input type='select' required onChange={(e) => setBrand(e.target.value) }>
                            <option value="">{literals.BRAND_INPUT}</option>
                            <option value="apple">{Constants.APPLE}</option>
                            <option value="asus">{Constants.ASUS}</option>
                            <option value="dell">{Constants.DELL}</option>
                            <option value="hp">{Constants.HP}</option>
                            <option value="msi">{Constants.MSI}</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.MODEL}</Label>
                        <Input type='text' placeholder={literals.MODEL_INPUT} required onChange={(e) => setModel(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.PRICE}</Label>
                        <Input type='number' placeholder={literals.PRICE_INPUT} required onChange={(e) => setPrice(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.CPU}</Label>
                        <Input type='select' required onChange={(e) => setCpu(e.target.value)}>
                            <option value="">{literals.CPU_INPUT}</option>
                            <option value="i3">{Constants.I3}</option>
                            <option value="i5">{Constants.I5}</option>
                            <option value="i7">{Constants.I7}</option>
                            <option value="i9">{Constants.I9}</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.RAM}</Label>
                        <Input type='select' required onChange={(e) => setRam(e.target.value)}>
                            <option value="">{literals.RAM_INPUT}</option>
                            <option value="4">{Constants.FOUR}</option>
                            <option value="8">{Constants.EIGHT}</option>
                            <option value="16">{Constants.SIXTEEN}</option>
                            <option value="32">{Constants.THIRTY_TWO}</option>
                            <option value="64">{Constants.SIXTY_FOUR}</option>
                            <option value="128">{Constants.ONE_HUNDRED_TWENTY_EIGHT}</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.TYPE}</Label>
                        <Input type='select' required onChange={(e) => setType(e.target.value)}>
                            <option value="">{literals.TYPE_INPUT}</option>
                            <option value="4">{Constants.WORKSTATION}</option>
                            <option value="8">{Constants.GAMING}</option>
                            <option value="8">{Constants.MULTIMEDIA}</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>{literals.SHAPE}</Label>
                        <Input type='select' required onChange={(e) => setShape(e.target.value)}>
                            <option value="">{literals.SHAPE_INPUT}</option>
                            <option value="desktop">{Constants.DESKTOP}</option>
                            <option value="laptop">{Constants.LAPTOP}</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center'>
                        <Button type="submit" className="btn btn-primary" onClick={onSubmit}>{literals.CREATE_COMPUTER_BUTTON}</Button>
                    </FormGroup>
                </Form>
            </Row>
        </Col>
    );
};

FormView.defaulProps = {
    history: {},
    language: {}
};

FormView.propTypes = {
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

export default connect(mapStateToProps)(FormView)

