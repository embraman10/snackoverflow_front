import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel' 
import {
  Button, Container, Grid, Header,Image, Segment
} from "semantic-ui-react";


class Home extends React.Component {

    render() {
        
        const renderBtn = this.props.loggedin ? <div><button><Link to="/logout" className="btn btn-full">Log Out</Link></button></div> 
        : 
        <div><button><Link to="/login" className="btn btn-full">Log In</Link></button>
        <button><Link to="/signup" className="btn btn-ghost">Sign Up</Link></button></div>
        


    return (
      <div className="Home-cover">
        <Container className="Home">
          <Segment vertical>
              <h1>Snack Overflow</h1>
              <h3>Organize your recipe from 360k Recipes</h3>
              {renderBtn}  
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Home;
