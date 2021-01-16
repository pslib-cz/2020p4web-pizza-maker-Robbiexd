import React from 'react';
import Pizza from './Pizza';
import Calzone from './Calzone';

import {Button, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Order({ingredientsList}){
    return(
        <>
            <Row>
                <Col>
                    <p>Order</p>
                    <Pizza
                    ingredientsList={ingredientsList}
                    ></Pizza>
                </Col>              
            </Row>
            
            <Row>
                <Col>
                    <p>Order</p>
                    <Calzone
                    ingredientsList={ingredientsList}
                    ></Calzone>
                </Col>              
            </Row>
        </>
    )
}

export default Order;
