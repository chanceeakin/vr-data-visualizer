import React from 'react';
import { FormGroup,
	FormControl,
	ControlLabel,
  HelpBlock
} from 'react-bootstrap';


export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    window.location = '/vr/' + this.state.value;
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
          <button type="button" onClick={this.handleClick}>Login</button>
        </FormGroup>
      </form>
    );
  }
}
