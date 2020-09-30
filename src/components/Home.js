import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Segment, Header, Button } from "semantic-ui-react";


class Home extends React.Component {

    render() {
        
        const renderBtn = this.props.loggedin ? <div><Button color="teal"><Link to="/logout" >Log Out</Link></Button></div> 
        : 
        <div><Button color="teal"><Link to="/login" >Log In</Link></Button>
        <Button color="teal"><Link to="/signup" >Sign Up</Link></Button></div>
        


    return (
      <div className="Home-cover">
        <Container className="Home">
          <Segment vertical textAlign="center">
              {/* <Header as="h1" color="teal">Snack Overflow</Header>
              <Header as="h2" color="teal">A webapp for the foodies</Header> */}
              <h1 >Snack Overflow</h1>
              <h3 >A webapp for the foodies</h3>
              {renderBtn}  
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Home;
