import React, { Component } from 'react'
import NewTripForm from './NewTripForm'
import { Button } from 'semantic-ui-react'

//this will display the modal for the new trip form
export default class DisplayContainer extends Component {
  constructor(props) {
  super(props)

    this.state = {
     showForm: false,
   }
  }

  setShowForm = () => {
  this.setState({
    showForm: !this.state.showForm
  })
}

  render() {
    return (
      <React.Fragment>
      <p>
        <Button className="ui primary button" primary onClick={() =>this.setShowForm()}> Make New Trip </Button>
      </p>
        {
          this.state.showForm &&
          <NewTripForm createTrip={this.props.createTrip} setShowForm={this.setShowForm}/>
        }
      </React.Fragment>
    )
  }


}
