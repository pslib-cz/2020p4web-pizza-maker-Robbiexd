import React from 'react';
import Ingredient from './Ingredient';

import {Button, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Calzone({ingredientsList}){
    
    return(
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>Calzone</Card.Title>
                            <Badge> Avaiable Ingredients </Badge>
                        </Col>
                    </Row>
                    <Row>                       
                        {ingredientsList.map((d, i) => (
                            <Col>
                                <Row>
                                    <Ingredient
                                    name={d.name}
                                    category={d.category}
                                    ></Ingredient>
                                </Row>                               
                            </Col>
                        ))}

                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default Calzone;
