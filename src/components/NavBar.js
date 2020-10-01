import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon} from "semantic-ui-react";

const NavBar = (props) => {

    return (
        <div className="Navbar">   
            <Menu inverted size="huge">
                <Menu.Item header>
                    <Icon className="coffee icon">
                        <div className ="steam steam-1"></div>
                        <div className ="steam steam-2"></div>
                        <div className ="steam steam-3"></div>
                        <div className ="steam steam-4"></div>
                    </Icon>
                    <Link to="/">Snack Overflow</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/main">Home</Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to="/recipes"> Find Recipes</Link>
                </Menu.Item>
                {/* <Menu.Item >
                    <Link to="/create"> Create Recipes</Link>
                </Menu.Item> */}
                <Menu.Item >
                    <Link to="/myaccount"> Favorite Recipes</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                <Menu.Item >
                    <Link to="/logout"> Logout</Link>
                </Menu.Item>
                    {/* <Dropdown text="My Account" className="item">
                        <Dropdown.Menu >
                            <Dropdown.Item  as={Link} to="/myaccount">Favorite Recipes</Dropdown.Item> */}
                            {/* <Dropdown.Item as={Link} to="/mycustomrecipes">My Recipes</Dropdown.Item> */}
                            {/* <Dropdown.Item  as={Link} to="/logout">Log Out</Dropdown.Item>        
                        </Dropdown.Menu> */}
                    {/* </Dropdown> */}
                </Menu.Menu>
            </Menu> 
        </div>
    )
}


export default NavBar;
