import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Segment, Header, Button, Grid } from "semantic-ui-react";


class Home extends React.Component {

    render() {
        
        const renderBtn = this.props.loggedin ? <div><Button color="teal"><Link to="/logout" >Log Out</Link></Button></div> 
        : 
        <div><Button color="teal" className="hvr-grow"><Link to="/login" >Log In</Link></Button>
        <Button color="teal"><Link to="/signup" >Sign Up</Link></Button></div>
        


    return (
      <div className="Home-cover">
        <Container className="Home">
          <Grid textAlign="center" verticalAlign="middle" style={{ minHeight: 500 }}>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment stacked raised textAlign="center">
                  <Header as="h1" color="teal">Snack Overflow</Header>
                  <Header as="h2" >A webapp for the foodies</Header>
                  {renderBtn}  
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Home;
