import React, {useContext} from 'react';
import IngredientList from './IngredientList';
import ChosenIngredient from './ChosenIngredient';

import {StateContext} from '../providers/providers';

import {Badge, Row, Col, Card, CardBody, CardTitle, ListGroup} from 'reactstrap';


function Order(){

    const food = window.location.href === "http://localhost:3000/order/pizza"? "Pizza": "Calzone";

    const state = useContext(StateContext);

    return(
        <>
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <CardTitle>{food}</CardTitle>
                            <Badge> Avaiable Ingredients </Badge>
                        </Col>
                    </Row>
                    <Row> 
                        <Col ></Col>
                        <Col xs="auto">
                            <h2>Choose ingredients</h2>
                            <IngredientList /></Col>
                        <Col xs="auto">
                            <h2>Selected ingredients</h2>
                            <ListGroup>
                                {state.chosenIngredients.map((d, i) => (
                                            <ChosenIngredient
                                                name={d.name}
                                                category={d.category}
                                            ></ChosenIngredient>
                                        ))}

                            </ListGroup>
                        </Col>
                        <Col></Col>                     
                    </Row>
                </CardBody>
            </Card>
        </>
    );
}

export default Order;
