import React from 'react';
import {
  Grid,
  Jumbotron
} from 'react-bootstrap';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="my-jumbo">
          <Grid>
            <h1>VR Simulator</h1>
            <p>This is an interactive VR simulation.</p>
            <p>It's built with <a href="https://www.aframe.io">A Frame</a>, an awesome technology. It also uses Twitter, React, and a number of other technologies.</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}
