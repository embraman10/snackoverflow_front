import React, { Component } from 'react';

  
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { Container, Grid, Header,Image, Segment, Button, Card } from "semantic-ui-react";


class User extends Component {

    handleClick = (event) => {
        this.props.recipeShow(event.target.dataset.apiid, this.props.history)
    }

    
    // render() {
    //     const user = this.props.user
    //     const recipes = this.props.recipes

    //        let favoriteText;
    //        if(recipes.length !== 0){
    //            favoriteText = 
    //                recipes.map(recipe => 
    //                 // <GridList cols={3}>
    //                   <GridListTile>
    //                      <img src={recipe.image}></img>
    //                      <GridListTileBar primary={`${recipe.title.substring(0,25)}...`}  actionIcon={
    //                          <IconButton onClick={this.handleClick} data-apiid={recipe.api_id}>
    //                              <InfoIcon style={{color: "#FCF3F3"}}  />
    //                          </IconButton>}>
    //                      </GridListTileBar>
    //                    </GridListTile>)
    //                 //    </GridList>)
    //        } else {
    //            favoriteText = <p>You don't have any favorite recipes yet.</p>
    //       }


    //     return (
    //         // <div className="MyAccount">
    //         //      {user ? <div>
    //         //          {/* <h1>Hello, {user.username}</h1> */}
    //         //          <h1>Hello, more formatting to come</h1>
    //         //          <h2>Your Favorite Recipes:</h2></div> : null}
    //         //     <List>{favoriteText}</List>               
    //         // </div>
    //         <div className="Favorites">
    //             <Container>
    //                 <Segment raised stacked color="teal" textAlign="center" style={{ minHeight: 400 }}>
    //                     {user ? <div>
    //                         <Header as="h1" textAlign="center">
    //                             Hello, {user.username}
    //                             </Header>
    //                         <Header as="h2" textAlign="center">
    //                             Your Favorite Recipes:
    //                         </Header>
    //                         <br></br>
    //                     </div> : null}
    //                     <Segment vertical c>
    //                     <GridList cols={3}>
    //                         {favoriteText}
    //                     </GridList>
    //                     </Segment>   
    //                 </Segment>
    //             </Container>
    //         </div>

    render() {
        const user = this.props.user
        const recipes = this.props.recipes
        
        let favoriteText;
            if(recipes.length !== 0){
                favoriteText = 
                    recipes.map(recipe => <ListItem alignItems="flex-start">
                        <ListItemAvatar><Avatar src={recipe.image} />
                    </ListItemAvatar>
                    <ListItemText primary={`${recipe.title.substring(0,25)}...`} />
                    <a href="#" onClick={this.handleClick} data-apiid={recipe.api_id}>More</a>
                    <Divider variant="inset" component="li" />
                    </ListItem>)
                 
            } else {
                favoriteText = <p>You don't have any favorite recipes yet.</p>
           }
        

    return (
        <div className="Favorites">
            <Container>
                <Segment raised stacked color="teal" textAlign="center" style={{ minHeight: 400 }}>
                    {user ? <div>
                        <Header as="h1" textAlign="center">
                            Hello, {user.username}
                        </Header>
                        <Header as="h2" textAlign="center">
                            Your Favorite Recipes:
                        </Header>
                        <br></br>
                    </div> : null}
                    <List>{favoriteText}</List>    
                </Segment>
            </Container>           
        </div>
        )
    }
}

export default User;