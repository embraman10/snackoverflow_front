import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/currentUsers.js';

import {
    Button,
    Container,
    Form,
    Grid,
    Header,
    Message,
    Segment
  } from "semantic-ui-react";

const Logout = ({ logout, history }) => {
    
    const handleClick = event => {
        event.preventDefault()
        history.goBack()
    }
    
    return (    
        <div className="Logout">
            <Container verticalAlign="middle">
                <Grid textAlign="center" verticalAlign="middle" style={{ minHeight: 400 }}>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment stacked raised style={{ maxWidth: 450 }} textAlign="center" color="teal" >
                            <Header as="h2" >
                                Are you sure you want to log out?
                            </Header>
                            <br></br>
                            <form onSubmit={logout}>
                                <Button color="teal" fluid size="large" onSubmit={logout}>
                                    Log Out
                                </Button>
                            </form>
                            <br></br>
                            <br></br>
                            <Button color="teal" fluid size="large" onClick={handleClick}>
                                Go back!
                            </Button>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
            {/* <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                <Segment stacked>
                    <Header as="h2" color="teal" textAlign="center">
                        Are you sure you want to log out?
                    </Header>
                    <Form size="large">
                            <Button color="teal" fluid size="large" type="submit" onSubmit={logout}>
                            Log Out
                            </Button>
                            <br></br>
                            <Button color="teal" fluid size="large" onClick={handleClick}>
                            Go back!
                            </Button>

            </Grid> */}
        </div>
    )
}

export default connect(null, { logout })(Logout);