import React, { Component } from 'react'
import { Form, Button, Label, Segment, Modal, Header } from 'semantic-ui-react'

export default class EditTripModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.tripToEdit.name,
      center_lat: props.tripToEdit.center_lat,
      center_long: props.tripToEdit.center_long,
      pin1_title: props.tripToEdit.pin1_title,
      pin1_subtitle: props.tripToEdit.pin1_subtitle,
      pin1_text: props.tripToEdit.pin1_text,
      pin1_color: props.tripToEdit.pin1_color,
      pin1_lat: props.tripToEdit.pin1_lat,
      pin1_long: props.tripToEdit.pin1_long,
      pin2_title: props.tripToEdit.pin2_title,
      pin2_subtitle: props.tripToEdit.pin2_subtitle,
      pin2_text: props.tripToEdit.pin2_text,
      pin2_color: props.tripToEdit.pin2_color,
      pin2_lat: props.tripToEdit.pin2_lat,
      pin2_long: props.tripToEdit.pin2_long,
      date: props.tripToEdit.date,
      time: props.tripToEdit.time
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateTrip(this.state)
  }

  render() {

    return(
      <Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
        <Header>
          <h3>Enter new info</h3>
        </Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
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
            step=0.000000000000001
            name="center_lat"
            value={this.state.center_lat}
            placeholder="Enter a latitude value for the center of the map"
            onChange={this.handleChange}
          />
          <Label>Map Center Longitude:</Label>
          <Form.Input
            type="number"
            step=0.000000000000001
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
            step=0.000000000000001
            name="pin1_lat"
            value={this.state.pin1_lat}
            placeholder="Enter a latitude value for the starting pin location"
            onChange={this.handleChange}
          />
          <Label>Starting Location Pin Longitude:</Label>
          <Form.Input
            type="number"
            step=0.000000000000001
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
            step=0.000000000000001
            name="pin2_lat"
            value={this.state.pin2_lat}
            placeholder="Enter a latitude value for the destination pin location"
            onChange={this.handleChange}
          />
          <Label>Destination Location Pin Longitude:</Label>
          <Form.Input
            type="number"
            step=0.000000000000001
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
            <Modal.Actions>
              <Button type="Submit">Update Trip</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
