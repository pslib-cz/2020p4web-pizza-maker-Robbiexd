import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import {Button, Jumbotron, Container} from 'reactstrap';

function Navigation (){
    return(
        <Navbar expand="lg" variant="light" bg="info">
            <Container>
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/ingredients" > Ingredients </Link>
                <Link to="/order/pizza" > Pizza</Link>
                <Link to="/order/calzone" > Calzone</Link>
            </Container>
        </Navbar>
    )
}

export default Navigation;