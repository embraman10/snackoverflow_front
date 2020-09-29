import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Grid, Menu, Icon} from "semantic-ui-react";

const NavBar = (props) => {

    return (

        <div className="Navbar">   
            <Grid padded className="tablet computer only">
                <Container>
                    <Menu borderless inverted size="huge">
                        <Menu.Item header>
                            <Icon className="coffee icon"></Icon>
                            <Link to="/">Snack Overflow</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/main">Home</Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Link to="/recipes">Recipes</Link>
                        </Menu.Item>
                        <Menu.Item as={Link} to="/recipes" name="new" >
                            Create Recipes
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Dropdown text="My Account" className="item">
                                <Dropdown.Menu>
                                    <Dropdown.Item><Link to="/myaccount">Favorited Recipes</Link></Dropdown.Item>
                                    <Dropdown.Item>New Recipes</Dropdown.Item>
                                    <Dropdown.Item>My Recipes</Dropdown.Item>
                                    <Dropdown.Item><Link to="/logout">Log Out</Link></Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Menu>
                </Container>
            </Grid>
            
        </div>


    )
}


export default NavBar;
