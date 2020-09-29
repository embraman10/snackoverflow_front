import React, { Component } from "react";
import { Grid, Segment, Container} from "semantic-ui-react";


class Footer extends Component {
  

  render() {

    return (
      <div className="footer">
        <Container>
          <Segment inverted vertical>
            <Grid columns={3}>
              <Grid.Column>
                {/* &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                <a href="#root">Terms</a> */}
              </Grid.Column>
              <Grid.Column>
                &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                <a href="#root">Terms</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>

      </div>
    );
  }
}



export default Footer
