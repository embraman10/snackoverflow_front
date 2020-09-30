import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon} from "semantic-ui-react";

const NavBar = (props) => {

    return (
        <div className="Navbar">   
            <Menu inverted size="huge">
                <Menu.Item header>
                    <Icon className="coffee icon"></Icon>
                    <Link to="/">Snack Overflow</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/main">Home</Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to="/recipes"> Find Recipes</Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to="/create"> Create Recipes</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Dropdown text="My Account" className="item">
                        <Dropdown.Menu >
                            <Dropdown.Item  as={Link} to="/myaccount">Favorite Recipes</Dropdown.Item>
                            <Dropdown.Item>My Recipes</Dropdown.Item>
                            <Dropdown.Item  as={Link} to="/logout">Log Out</Dropdown.Item>        
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu> 
        </div>
    )
}


export default NavBar;
