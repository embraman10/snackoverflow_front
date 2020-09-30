import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/currentUsers.js';

import {
    Button,
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
            <form onSubmit={logout}>
                <input type="submit" value="Click to Log Out Cause Button Issues" className="logoutInput"></input>   
            </form>
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
                    </Form>
                    </Segment>
                </Grid.Column>
            </Grid> */}
        </div>
    )
}

export default connect(null, { logout })(Logout);