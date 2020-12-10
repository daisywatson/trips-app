import React, { Component } from 'react'
import TripList from './TripList'
import NewTripForm from './NewTripForm'
import EditTripModal from './EditTripModal'
import Map from './Map'
// import DisplayContainer from './DisplayContainer'

export default class UserPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      trips: [],
      idOfTripToEdit: -1,
      idOfTripToShow: -1
    }
  }

  componentDidMount() {
    this.getTrips()
  }

  getTrips = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/mypage"
      console.log("about to fetch data from:")
      console.log(url)
      const tripsResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log(tripsResponse)
      const tripsJson = await tripsResponse.json()
      console.log(tripsJson)

      this.setState({
        trips: tripsJson.data
      })


    } catch(err) {
      console.log("Error getting trips data.", err)
    }
  }

  deleteTrip = async (idOfTripToDelete) => {
    console.log(idOfTripToDelete)

    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/mypage/" + idOfTripToDelete

      const deleteTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      console.log("deleteTripResponse", deleteTripResponse)
      const deleteTripJson = await deleteTripResponse.json()
      console.log("deleteTripJson", deleteTripJson)

      if(deleteTripResponse.status === 200) {
        this.setState({
          trips: this.state.trips.filter(trip => trip.id !== idOfTripToDelete)
        })
      }
    } catch(err) {
      console.log("Error deleting trip: ", err)
    }

  }

  createTrip = async (tripToAdd) => {
    console.log("here is the trip you want to add")
    console.log(tripToAdd)
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/mypage/create"
      const createTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripToAdd)
      })
      const createTripJson = await createTripResponse.json()
      console.log(createTripJson)

      if(createTripResponse.status === 201 || createTripResponse.status === 200){
        this.setState({
          trips: [...this.state.trips, createTripJson.data]
        })
      }


    } catch(err) {
      console.log("Error adding trip", err)
    }
  }

  editTrip = (idOfTripToEdit) => {
    console.log("you are trying to edit trip with id: ", idOfTripToEdit)

    this.setState({
      idOfTripToEdit: idOfTripToEdit
    })
  }

  showTrip = (idOfTripToShow) => {
    console.log("you are trying to show trip with id: ", idOfTripToShow)

    this.setState({
      idOfTripToShow: idOfTripToShow
    })
  }

  updateTrip = async (updatedTripInfo) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/trips/mypage/" + this.state.idOfTripToEdit

      const updateTripResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updatedTripInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log("updateTripResponse", updateTripResponse)
      const updateTripJson = await updateTripResponse.json()
      console.log("updateTripJson", updateTripJson)

      if(updateTripResponse.status === 200) {
        const trips = this.state.trips
        const indexOfTripBeingUpdated = trips.findIndex(trip => trip.id === this.state.idOfTripToEdit)
        trips[indexOfTripBeingUpdated] = updateTripJson.data
        this.setState({
          trips: trips,
          idOfTripToEdit: -1 //close the modal
        })
      }

    } catch(err) {
      console.log("Error updating trip info: ", err)
    }
  }

  closeModal = () => {
   this.setState({
     idOfTripToEdit: -1
   })
 }

 closeShowModal = () => {
  this.setState({
    idOfTripToShow: -1
  })
}

  render() {
    return (
      <React.Fragment>
        <h2>Your Trips</h2>
        <NewTripForm createTrip={this.createTrip}/>
        <TripList
          trips={this.state.trips}
          deleteTrip={this.deleteTrip}
          editTrip={this.editTrip}
          showTrip={this.showTrip}
        />
        {
          this.state.idOfTripToEdit !== -1
          &&
          <EditTripModal
            key={this.state.idOfTripToEdit}
            tripToEdit={this.state.trips.find((trip) => trip.id === this.state.idOfTripToEdit)}
            updateTrip={this.updateTrip}
            closeModal={this.closeModal}
          />
        }
        {
          this.state.idOfTripToShow !== -1
          &&
          <Map
            key={this.state.idOfTripToShow}
            tripToShow={this.state.trips.find((trip) => trip.id === this.state.idOfTripToShow)}
            closeShowModal={this.closeShowModal}
          />
        }
      </React.Fragment>
    )
  }
}
