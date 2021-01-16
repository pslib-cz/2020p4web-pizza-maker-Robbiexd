import React from 'react';
import IngredientList from './IngredientList';

import Add from './Add';

import {Col, Row} from "reactstrap";

function Ingredients(){
  return(
    <div>
      
      <Add/>
      
      <Row>
        <Col></Col>
        <Col xs="auto"> <IngredientList /></Col>
        <Col></Col>         
      </Row>
    </div>
  );
}
export default Ingredients;