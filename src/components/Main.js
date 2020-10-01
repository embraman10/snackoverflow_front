import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { recipeShow, resetFavoriteAndReview } from '../actions/recipeActions.js';
import { fetchRecipes, recipeShow } from '../actions/mainActions.js';

import Carousel from 'react-bootstrap/Carousel' 
import { Container, Grid, Header,Image, Segment, Button } from "semantic-ui-react";


class Main extends Component {

  state = {

  };

  
  componentDidMount(){
    this.props.fetchRecipes()
  }

  handleClick = (apiId, history) => {
    this.props.recipeShow(apiId, history)
  }

  render() {

    return (
      <div className="Main"> 
        <Container>
          <Segment stacked raised>
            <Segment vertical>
              <div>
                <Carousel>
                    {this.props.recipes!== null ? this.props.recipes.map(recipe => 
                    <Carousel.Item key={recipe.recipeId}>
                      <img
                        className="d-block w-100"
                        src={recipe.image}
                        alt="First slide"/>
                      <Carousel.Caption>
                        <Header as='h1' >{recipe.title}</Header>
                        <Button color="teal" onClick={() => this.handleClick(recipe.recipeId, this.props.history)}> View </Button>
                      </Carousel.Caption>
                    </Carousel.Item>) : 
                    <Segment loading></Segment>}
                </Carousel>
              </div>
            </Segment>   
          <Container>
            <Segment vertical padded>
              <Grid container stackable textAlign="center" columns={3}>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://c.pxhere.com/photos/3e/43/soup_ideahive_5cardetmooc-350422.jpg!s"/>
                  <Header as="h1">Find Recipes</Header>
                  <p>
                    Search for recipes in the Spoonacular database that includes over 36,000 recipes. 
                    You can search for key terms or filter by diet preference.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://c.pxhere.com/photos/27/df/book_read_reading_bookmark_page-72499.jpg!d"
                  />
                  <Header as="h1">Save Recipes</Header>
                  <p>
                    Find a recipe you like from the database? Leave a review and favorite that recipe for later reference.
                  </p>
                  {/* <Button basic>View details &raquo;</Button> */}
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://get.pxhere.com/photo/plant-leaf-dish-food-herb-produce-vegetable-crop-autumn-spicy-thaifood-thaicuisine-curry-chillies-redcurry-currypaste-pestleandmortar-flowering-plant-land-plant-392558.jpg"
                  />
                  <Header as="h1">Create Recipes</Header>
                  <p>
                      Create your own recipes to start building your own digital recipebook! (Currently under construction)
                  </p>
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment padded>
              <Header as="h2" color="teal"> Future Features: </Header>
            </Segment>
            <Segment vertical padded>
              <Grid stackable>
                <Grid.Column width={10}>
                  <Header as="h1">
                    What's In Your Pantry?{" "}
                  </Header>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                    id ligula porta felis euismod semper. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                    ac cursus commodo.
                  </p>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image 
                  circular
                  size="medium"
                  src="https://c.pxhere.com/photos/36/eb/store_shelves_retail_shop_market_goods_food_merchandise-1387801.jpg!s" />
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment vertical padded>
              <Grid stackable>
                <Grid.Column width={6}>
                  <Image 
                  circular
                  size="medium"
                  src="https://c.pxhere.com/images/0e/54/f273f75d63bf5ae031cb2d0a5600-1448985.jpg!s" />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as="h1">
                    Find Drink Pairings
                    {/* <span className="sub">it's that good.</span> */}
                  </Header>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                    id ligula porta felis euismod semper. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                    ac cursus commodo.
                  </p>
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment vertical>
              <Grid stackable>
                <Grid.Column width={10}>
                  <Header as="h1">
                    Find local restaraunts 
                    {/* <span className="sub">this one.</span> */}
                  </Header>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                    id ligula porta felis euismod semper. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                    ac cursus commodo.
                  </p>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image 
                  circular
                  size="medium"
                  src="https://c.pxhere.com/photos/59/5c/plate_food_dining_cuisine_restaraunt-99896.jpg!d" />
                </Grid.Column>
              </Grid>
            </Segment>
          </Container>
          <Segment vertical></Segment>
        </Segment>
        </Container>
      </div>
    )
 }
}

export default connect((state)=>({recipes: state.recipesReducer.recipes}), { fetchRecipes, recipeShow })(Main);
