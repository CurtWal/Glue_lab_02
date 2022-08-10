import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>Collection Of Friends</h2>
        <nav>
        <Button href="#">Home</Button>
        <Button href="#">Images</Button>
        <Button href="#">Contact</Button>
        </nav>
      </div>
    )
  }
}
