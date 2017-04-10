import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Button
} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Dr. E's VR Simulator</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
    );
  }
}
