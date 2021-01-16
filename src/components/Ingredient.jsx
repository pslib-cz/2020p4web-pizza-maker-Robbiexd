import React from 'react';

import {Button, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Ingredient({name, category}){
    return(
        <>
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
                    <Row>
                        <Button>Add</Button>
                    </Row>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default Ingredient;