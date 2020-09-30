import React, { Component } from "react";
import { Grid, Segment, Container} from "semantic-ui-react";


class Footer extends Component {
  

  render() {

    return (
      <div className="footer">
        {/* <Container> */}
          <Segment inverted size="small">
            <Grid columns={5}>
              <Grid.Column textAlign="center">
              <a href="#root">Back to top</a>
              </Grid.Column>
              <Grid.Column textAlign="center">
              <a href="#root">Back to top</a>
                <a href="#root">Terms</a>
              </Grid.Column >
              <Grid.Column textAlign="center">
                <a href="#root">Back to top</a>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <a href="#root">Back to top</a>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        {/* </Container> */}

      </div>
    );
  }
}



export default Footer
