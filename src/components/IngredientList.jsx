import React,{useContext} from 'react';
import { ListGroup } from 'reactstrap';

import Ingredient from './Ingredient'; 

import {StateContext} from '../providers/providers';



function IngredientList(){

    const state = useContext(StateContext);

    const renderIngredient = (d) => {
        if(d.visible)
        {
            return(
                <Ingredient
                name={d.name}
                category={d.category}
                ></Ingredient>
            );
        }

        return null;

    }

  return(
    <ListGroup>
      {state.ingredients.map((d, i) => (
                renderIngredient(d)
            ))}

    </ListGroup>
  );
}
export default IngredientList;