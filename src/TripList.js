import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function TripList(props) {

  const trips = props.trips.map(trip => {
    return (
      <Card key={trip.id} color={"green"}>
        <Card.Content textAlign={"center"}>
          <Card.Header>
            <span className="fake-link" onClick={()=> props.showTrip(trip.id)}>
            {trip.name}</span>
          </Card.Header>
          <Card.Meta>
            From {trip.pin1_title} to {trip.pin2_title}
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
            onClick={ ()=> props.editTrip(trip.id) }
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
