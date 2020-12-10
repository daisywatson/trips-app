import './App.css';
import React, { Component } from 'react'
import { ReactBingmaps } from 'react-bingmaps';
import { Container, Form, Button, Label, Modal, Header } from 'semantic-ui-react'

export default class Map extends Component{
  constructor(props) {
    super(props)

    this.state = {
      name: props.tripToShow.name,
      center: [props.tripToShow.center_lat, props.tripToShow.center_long],
      pins: [
        {
          "location":[props.tripToShow.pin1_lat, props.tripToShow.pin1_long],
          "option":{ title: props.tripToShow.pin1_title,
          subTitle: props.tripToShow.pin1_subtitle,
          text: props.tripToShow.pin1_text,
          color: props.tripToShow.pin1_color }
        },
        {
          "location":[props.tripToShow.pin2_lat, props.tripToShow.pin2_long],
          "option":{ title: props.tripToShow.pin2_title,
          subTitle: props.tripToShow.pin2_subtitle,
          text: props.tripToShow.pin2_text,
          color: props.tripToShow.pin2_color }
        }
      ]
    }
  }

// {
//    "location":[40.939758597978816, -74.12149282966999],
//     "option":{ title: 'Radburn',
//     subTitle: 'Fair Lawn Train Station',
//     text: 'FL',
//     color: 'blue' }
// }

    // {
    //   "location":[40.98388529354977, -74.12139200405326],
    //   "option":{ title: 'Ridgewood',
    //   subTitle: 'Train Station',
    //   text: 'R',
    //   color: 'black' }
    // }

  editCenter = (lat, long) => {
    this.setState({
      center: [lat, long]
    })
  }

  editPins = (pin1, pin2) => {
    this.setState({
      pins: [pin1, pin2]
    })
  }

  //LACMA
  // editCenter(34.064714432302424, -118.35708353279432)
  // console.log(center)
  // const tester = () => {
  //   let pin1 = {
  //     "location":[40.939758597978816, -74.12149282966999],
  //     "option":{ title: 'Radburn',
  //     subTitle: 'Fair Lawn Train Station',
  //     text: 'FL',
  //     color: 'blue' }
  //   }
  //   let pin2 = {
  //     "location":[40.91742035459595, -74.0756392026871],
  //     "option":{ title: 'Garden State Plaza',
  //     subTitle: 'Mall',
  //     text: 'GSP',
  //     color: 'green' }
  //   }
  //   editPins(pin1, pin2)
  // }




  render() {

      return (
        <Modal open={true} closeIcon={true} onClose={this.props.closeShowModal}>
          <Header>
            <h3>{this.props.tripToShow.name}</h3>
          </Header>
          <Modal.Content>
            <div className="App" style={{ height: '400px', width: '600px' }}>
              <ReactBingmaps
                bingmapKey = {process.env.REACT_APP_BING_API_KEY}
                center = {this.state.center}
                pushPins = {this.state.pins}
              >
              </ReactBingmaps>
            </div>
          </Modal.Content>
        </Modal>
      );
    }

}
