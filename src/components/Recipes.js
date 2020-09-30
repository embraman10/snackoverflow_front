import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../actions/recipesActions.js';
import { recipeShow, resetFavoriteAndReview } from '../actions/recipeActions.js';

import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import {
    Container, Grid, Header,Image, Segment, Form, Button
  } from "semantic-ui-react";


  
class Recipes extends Component {

    state = {
        query: "",
        diet: ""
    }

    componentDidMount(){
        this.props.resetFavoriteAndReview()
    }


    handleInputChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSelectChange = event => {
        this.setState({
            ...this.state, diet: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchRecipes(this.state)
    }

    handleClick = (apiId, history) => {
        this.props.recipeShow(apiId, history)
    }

    render() {

        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       display: 'flex',
        //       flexWrap: 'wrap',
        //       justifyContent: 'space-around',
        //       overflow: 'hidden',
        //       backgroundColor: theme.palette.background.paper,
        //     },
        //     gridList: {
        //       width: 500,
        //       height: 450,
        //       // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        //       transform: 'translateZ(0)',
        //     },
        //     titleBar: {
        //       background:
        //         'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        //         'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        //     },
        //     icon: {
        //       color: 'white',
        //     },
        //   }));

        
        return(
            <div className="Recipes">
                <Container>
                    <Segment stacked  textAlign="center">
                        <Segment>
                            <Header as="h1" color="teal" textAlign="center">Search Recipes</Header>
                            <Form onSubmit={this.handleSubmit} style={{margin: "6% auto"}}>
                                <strong>Search :</strong> 
                                
                                <TextField id="outlined-search" type="text" name="query" value={this.state.query} placeholder="e.g.burger" onChange={this.handleInputChange} style={{marginLeft: "10px", marginRight: "10px"}} />
                                
                                <strong>Diet:</strong>
                                
                                <Select value={this.state.diet} onChange={this.handleSelectChange}>
                                    <MenuItem>Select</MenuItem>
                                    <MenuItem value="all">All</MenuItem>
                                    <MenuItem value="glutenfree">Gluten Free</MenuItem>
                                    <MenuItem value="ketgenic">Ketogenic</MenuItem>
                                    <MenuItem value="vegetarian">Vegetarian</MenuItem>
                                    <MenuItem value="vegn">Vegan</MenuItem>
                                    <MenuItem value="paleo">Paleo</MenuItem>
                                    <MenuItem value="whole30">Whole 30</MenuItem>
                                </Select>
                                
                                <Button  color="teal" type="submit" value="Search" style={{marginLeft: "15px"}}>Search</Button>
                            </Form>
                        </Segment>
                        <GridList cols={2} spacing={2} >
                            {this.props.recipes!== null ? this.props.recipes.map(recipe => <GridListTile key={recipe.recipeId}><img src={recipe.image}></img><GridListTileBar title={recipe.title}  actionIcon={
                                <IconButton onClick={() => this.handleClick(recipe.recipeId, this.props.hisotry)}>
                                    <InfoIcon style={{color: "#FCF3F3"}}  />
                                </IconButton>}>
                            </GridListTileBar></GridListTile>) : <h1>No recipes found. Please try with another keyword.</h1>}     
                        </GridList>
                    </Segment>
                </Container>
            </div>
        )
    }
}


export default connect(null, { searchRecipes, recipeShow, resetFavoriteAndReview })(Recipes);