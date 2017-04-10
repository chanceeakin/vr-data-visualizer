import React from 'react';
import { FormGroup,
	FormControl,
	ControlLabel,
  HelpBlock,
  Grid,
  Col,
  Row,
  Button
} from 'react-bootstrap';

export default class Body extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6} mdOffset={3}>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.props.getValidationState()}
              >
              <ControlLabel>Pick a Twitter Handle from the List!</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="prattprattpratt"
                  onChange={this.props.handleChange}
                >
                  <option value="prattprattpratt">Chris Pratt</option>
                  <option value="nodejs">NodeJs</option>
                  <option value="chanceeakin">Chance Eakin</option>
                  <option value="chancetherapper">Chance the Rapper</option>
                  <option value="drake">The Sensitive Rapper</option>
                  <option value="wsj">Wall Street Journal</option>
                </FormControl>
                <HelpBlock>Select from the List!</HelpBlock>
                <p><Button bsStyle='primary' bsSize='large' onClick={this.props.handleClick}>Check it out!</Button></p>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
