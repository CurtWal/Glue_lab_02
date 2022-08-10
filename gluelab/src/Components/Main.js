import React, { Component } from 'react'
import mock from './MockData.json'
import Person from './Person'
export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>Your Friend List: </h1>
        {mock.person.map(person => {
            return(
                <Person first_name={person.first_name} last_name={person.last_name} email={person.email} City={person.City} ip_address={person.ip_address} key={person.id}/>
            )
        })}
      </div>
    )
  }
}
