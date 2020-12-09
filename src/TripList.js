import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function TripList(props) {

  const trips = props.trips.map(trip => {
    return (
      <Card key={trip.id} color={"red"}>
        <Card.Content textAlign={"center"}>
          <Card.Header>
            {trip.name}
          </Card.Header>
          <Card.Meta>
            From {trip.pin1_name} to {trip.pin2_name}
          </Card.Meta>
          <Card.Description>
            {trip.date} at {trip.time}
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign={"center"}>
          <Button
            basic color='red'
            onClick={ ()=> props.deleteTrip(trip.id) }
          >
            Delete {trip.name}
          </Button>
          <Button
            basic color='green'
            onClick={ ()=> props.tripDog(dog.id) }
          >
            Edit {trip.name}
          </Button>
        </Card.Content>
      </Card>

    )
  })

  return (
    <Card.Group centered={true}>
      {trips}
    </Card.Group>
  )
}
