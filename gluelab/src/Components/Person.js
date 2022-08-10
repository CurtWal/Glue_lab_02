import React, { Component } from 'react'
import{Button, Card} from 'react-bootstrap'

export default class Person extends Component {
    // start favorite at zero
    constructor(props) {
        super(props);
        this.state = {
            fav: 0,
        }
    }
    // add 1 to have ever is clicked
    handleClicks(){
        this.setState((prevState) =>({
            fav: prevState.fav + 1
        }))
    }
  render() {
    return (
      <div>
        {/* <h1>Your friend list: {this.props.first_name} {this.props.last_name}</h1>
        <h1>email: {this.props.email}</h1>
        <h1>City: {this.props.City}</h1>
        <h1>ip address: {this.props.ip_address}</h1> */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-t-shirt-white-background-147541161.jpg' alt='Person'/>
        <Card.Body>
        <Card.Title>{this.props.first_name} {this.props.last_name}</Card.Title>
        <Card.Text>
        email: {this.props.email}<br></br>
        City: {this.props.City}<br></br>
        ip address: {this.props.ip_address}
        </Card.Text>
        <Button onClick={() => this.handleClicks()} variant="outline-success"> ❤️{this.state.fav} Favorites</Button>
      </Card.Body>
        </Card>
      </div>
    )
  }
}
