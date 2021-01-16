import React, {useState} from 'react';
import pizzaImg from './pizza.jpg';
import './App.css';
import Order from './components/Order';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import {Button, Jumbotron, Container} from 'reactstrap';

const initialIngredientsList = [
           
  {
    name: "pork",
    category: "meat"    
  },
  {
    name: "beef",
    category: "meat"    
  },
  {
    name: "chicken",
    category: "meat"    
  },
  {
    name: "tomatos",
    category: "vegetables"    
  },
  {
    name: "pepper",
    category: "vegetables"    
  },
  {
    name: "ketchup",
    category: "dressing"    
  },
  {
    name: "melted cheese",
    category: "dressing"    
  },
  {
    name: "sliced onion",
    category: "extras"    
  },
  {
    name: "olives",
    category: "extras"    
  },
  {
    name: "chilli",
    category: "extras"    
  }
];


function App() {

  const [ingredientsList, setIngredientsList] = useState(initialIngredientsList);

  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="info">
            <Container>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Button color="danger" > Pizza</Button>
                <Button color="danger" > Calzone </Button>
            </Container>
      </Navbar>
      <Row>
        <Col>
            <img src={pizzaImg}></img>
        </Col>
      </Row>

      <Row>
        <Col>
            <Order
            ingredientsList={ingredientsList}
            ></Order>
        </Col>
      </Row>       
    </div>
  );
}

export default App;
