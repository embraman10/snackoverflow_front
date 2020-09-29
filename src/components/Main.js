import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel' 
import {
  Button, Container, Grid, Header,Image, Segment
} from "semantic-ui-react";


class Main extends React.Component {

    render() {
        const renderBtn = this.props.loggedin ? <div><button><Link to="/logout" className="btn btn-full">Log Out</Link></button></div> : <div><button><Link to="/login" className="btn btn-full">Log In</Link></button><button><Link to="/signup" className="btn btn-ghost">Sign Up</Link></button></div>
        const slickSettings = {
            autoplay: true,
            dots: true,
            speed: 500
          };


    return (
      <div className="App"> 
        <Container>
          <Segment vertical>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://v1.nitrocdn.com/eSLhakvQipAhEWtksvxrnpAZbKWwysTe/assets/static/optimized/rev-744f298/wp-content/uploads/2016/11/potato-rollsG.jpg"
                  alt="First slide"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i1.wp.com/www.lavenderandlovage.com/wp-content/uploads/2013/04/Cheese-and-Onion-Scone-Bread-Random-Recipe-151.jpg?fit=1500%2C1096&ssl=1"
                  alt="Third slide"/>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src="https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Slimming-Worlds-rustic-garlic-chicken-tray-bake.jpg"
                      alt="Third slide"
                      />
                      <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Segment>    
        
        <Container>
          <Segment vertical padded>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="https://c.pxhere.com/photos/3e/43/soup_ideahive_5cardetmooc-350422.jpg!s"
                />
                <Header as="h1">Find Recipes</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
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
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
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
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                {/* <Button basic>View details &raquo;</Button> */}
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical padded>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                  What's In Your Pantry?{" "}
                  {/* <span className="sub">It'll blow your mind.</span> */}
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
                  And lastly, 
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

            </Container>
      </div>
    )
 }
}

export default Main;
