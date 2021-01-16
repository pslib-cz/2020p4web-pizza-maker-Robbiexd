import React from 'react';

import {Button, Badge, ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function ChosenIngredient({name, category}){

    return(
        <ListGroupItem>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                        </Col>
                        <Col>
                            <p> category: {category}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            
        </ListGroupItem>
    )
}

export default ChosenIngredient;