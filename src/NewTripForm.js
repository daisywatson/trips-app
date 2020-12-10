import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewDogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      center_lat: 0,
      center_long: 0,
      pin1_title: '',
      pin1_subtitle: '',
      pin1_text: '1',
      pin1_color: 'red',
      pin1_lat: 0,
      pin1_long: 0,
      pin2_title: '',
      pin2_subtitle: '',
      pin2_text: '2',
      pin2_color: 'blue',
      pin2_lat: 0,
      pin2_long: 0,
      date: '',
      time: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createTrip(this.state)

    this.setState({
      name: '',
      center_lat: 1,
      center_long: 1,
      pin1_title: '',
      pin1_subtitle: '',
      pin1_text: '1',
      pin1_color: 'red',
      pin1_lat: 1,
      pin1_long: 1,
      pin2_title: '',
      pin2_subtitle: '',
      pin2_text: '2',
      pin2_color: 'blue',
      pin2_lat: 1,
      pin2_long: 1,
      date: '',
      time: ''
    })
  }

  render()  {
    return (
      <Segment>
        <h4> Add new trip:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Label>Trip Name:</Label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name for this trip"
            onChange={this.handleChange}
          />
          <Label>Map Center Latitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="center_lat"
            value={this.state.center_lat}
            placeholder="Enter a latitude value for the center of the map"
            onChange={this.handleChange}
          />
          <Label>Map Center Longitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="center_long"
            value={this.state.center_long}
            placeholder="Enter a longitude value for the center of the map"
            onChange={this.handleChange}
          />
          <Label>Starting Location Pin Name:</Label>
          <Form.Input
            type="text"
            name="pin1_title"
            value={this.state.pin1_title}
            placeholder="Enter the name for the first pin on the map"
            onChange={this.handleChange}
          />
          <Label>Starting Location Pin Subtitle:</Label>
          <Form.Input
            type="text"
            name="pin1_subtitle"
            value={this.state.pin1_subtitle}
            placeholder="Enter a subheading for the first pin (optional)"
            onChange={this.handleChange}
          />
          <Label>First Pin Marker Name:</Label>
          <Form.Input
            type="text"
            name="pin1_text"
            value={this.state.pin1_text}
            placeholder="Enter one letter or number for the marker on the map (optional)"
            onChange={this.handleChange}
          />
          <Label>First Pin Marker Color:</Label>
          <Form.Input
            type="text"
            name="pin1_color"
            value={this.state.pin1_color}
            placeholder="Enter a color for the marker on the map (optional) i.e. red"
            onChange={this.handleChange}
          />
          <Label>Starting Location Pin Latitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="pin1_lat"
            value={this.state.pin1_lat}
            placeholder="Enter a latitude value for the starting pin location"
            onChange={this.handleChange}
          />
          <Label>Starting Location Pin Longitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="pin1_long"
            value={this.state.pin1_long}
            placeholder="Enter a longitude value for the starting pin location"
            onChange={this.handleChange}
          />
          <Label>Destination Location Pin Name:</Label>
          <Form.Input
            type="text"
            name="pin2_title"
            value={this.state.pin2_title}
            placeholder="Enter the name for the second pin on the map"
            onChange={this.handleChange}
          />
          <Label>Destination Location Pin Subtitle:</Label>
          <Form.Input
            type="text"
            name="pin2_subtitle"
            value={this.state.pin2_subtitle}
            placeholder="Enter a subheading for the second pin (optional)"
            onChange={this.handleChange}
          />
          <Label>Second Pin Marker Name:</Label>
          <Form.Input
            type="text"
            name="pin2_text"
            value={this.state.pin2_text}
            placeholder="Enter one letter or number for the marker on the map (optional)"
            onChange={this.handleChange}
          />
          <Label>Second Pin Marker Color:</Label>
          <Form.Input
            type="text"
            name="pin2_color"
            value={this.state.pin2_color}
            placeholder="Enter a color for the marker on the map (optional) i.e. blue"
            onChange={this.handleChange}
          />
          <Label>Destination Location Pin Latitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="pin2_lat"
            value={this.state.pin2_lat}
            placeholder="Enter a latitude value for the destination pin location"
            onChange={this.handleChange}
          />
          <Label>Destination Location Pin Longitude:</Label>
          <Form.Input
            type="number"
            step="0.000000000000001"
            name="pin2_long"
            value={this.state.pin2_long}
            placeholder="Enter a longitude value for the center of the map"
            onChange={this.handleChange}
          />
          <Label>Date of Trip:</Label>
          <Form.Input
            type="date"
            name="date"
            value={this.state.date}
            placeholder="Enter a date for the trip"
            onChange={this.handleChange}
          />
          <Label>Time of Trip:</Label>
          <Form.Input
            type="time"
            name="time"
            value={this.state.time}
            placeholder="Enter a time for the trip"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Trip</Button>
        </Form>
      </Segment>
    )
  }
}
