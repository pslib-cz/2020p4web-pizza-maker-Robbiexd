import React, {useContext} from 'react';

import {StateContext, SetStateContext} from '../providers/providers';


import {Button, Badge, ListGroupItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Ingredient({name, category}){

    const ingredientPage = window.location.href === "http://localhost:3000/ingredients"? true: false;

    const state = useContext(StateContext);
    const setState = useContext(SetStateContext);


    const renderButton = () => {
        if(!ingredientPage)
        {
            return(
                <Button onClick={() => chooseIngredient()}>Add</Button>
            );
        }

        return null;
    }

    const chooseIngredient = () => {
        if(state.chosenIngredients.length > 2)
        {
            alert("Nelze zadat vice jak 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
        else 
        {
            const newIngredients = [...state.ingredients];
            const chosenIngredient = {name: name, category: category};
            const newChosenIngredients = [...state.chosenIngredients, chosenIngredient];
            newIngredients.forEach(item => {
                if(item.category === chosenIngredient.category)
                {
                    item.visible = false;
                }
            })

            setState({...state, ingredients: newIngredients, chosenIngredients: newChosenIngredients});
        }
            
    }
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
                    <Row>
                        {renderButton()}
                    </Row>
                </Card.Body>
            </Card>
            
        </ListGroupItem>
    )
}

export default Ingredient;