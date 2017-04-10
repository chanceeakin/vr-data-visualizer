import React from 'react';

import Header from '../components/intro/header.js';
import Body from '../components/intro/body.js';
import InputForm from '../components/intro/form.js';
import Footer from '../components/intro/footer.js';
import '../styles/intro.css';

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

  getValidationState(e) {
    const length = this.state.value.length;
    if (length > 1) return 'success';
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
      <div>
        <Header />
        <Body />
        <InputForm
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          getValidationState={this.getValidationState}
        />
        <Footer />
      </div>
    );
  }
}
