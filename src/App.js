import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import pizzaImg from './pizza.jpg';
import './App.css';
import {StateContext, SetStateContext} from './providers/providers';

import Order from './components/Order';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Ingredients from './components/Ingredients';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const initialIngredientsList = {
  ingredients: [
           
    {
      name: "pork",
      category: "meat",
      visible: true   
    },
    {
      name: "beef",
      category: "meat",
      visible: true       
    },
    {
      name: "chicken",
      category: "meat",
      visible: true       
    },
    {
      name: "tomatos",
      category: "vegetables",
      visible: true      
    },
    {
      name: "pepper",
      category: "vegetables",
      visible: true       
    },
    {
      name: "ketchup",
      category: "dressing",
      visible: true       
    },
    {
      name: "melted cheese",
      category: "dressing" ,
      visible: true      
    },
    {
      name: "sliced onion",
      category: "extras" ,
      visible: true      
    },
    {
      name: "olives",
      category: "extras" ,
      visible: true      
    },
    {
      name: "chilli",
      category: "extras",
      visible: true      
    }
  ],

  chosenIngredients: []
};




function App() {

  const [ingredientsList, setIngredientsList] = useState(initialIngredientsList);

  return (
    <StateContext.Provider value={ingredientsList}>
      <SetStateContext.Provider value={setIngredientsList}>
          <Router>
            <div className="App">
              <Row>
                  <Col>
                      <Navigation></Navigation>
                  </Col>
              </Row>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/order/pizza" exact component={Order}/>
                <Route path="/order/calzone" exact component={Order} />
                <Route path="/ingredients" exact component={Ingredients} />
                <Route path="/" component={NotFound} />
              </Switch>
              
          </div>
        </Router>
      </SetStateContext.Provider>
    </StateContext.Provider>
    
    
  );
}

export default App;
