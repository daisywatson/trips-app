import './App.css';
import React, {useState, useEffect} from "react"
import { ReactBingmaps } from 'react-bingmaps';


function App() {

  const [center, setCenter] = useState([40.98388529354977, -74.12139200405326])
  const [pins, setPins] = useState(
    [
      {
        "location":[40.98388529354977, -74.12139200405326],
        "option":{ title: 'Ridgewood',
        subTitle: 'Train Station',
        text: 'R',
        color: 'red' }
      },
      {
        "location":[40.939758597978816, -74.12149282966999],
        "option":{ title: 'Radburn',
        subTitle: 'Fair Lawn Train Station',
        text: 'FL',
        color: 'blue' }
      }
    ]
  )

  const editCenter = (lat, long) => {
    setCenter([lat, long])
  }

  const editPins = (pin1, pin2) => {
    setPins(
      [pin1, pin2]
    )
  }

  //LACMA
  // editCenter(34.064714432302424, -118.35708353279432)
  // console.log(center)
  const tester = () => {
    let pin1 = {
      "location":[40.939758597978816, -74.12149282966999],
      "option":{ title: 'Radburn',
      subTitle: 'Fair Lawn Train Station',
      text: 'FL',
      color: 'blue' }
    }
    let pin2 = {
      "location":[40.91742035459595, -74.0756392026871],
      "option":{ title: 'Garden State Plaza',
      subTitle: 'Mall',
      text: 'GSP',
      color: 'green' }
    }
    editPins(pin1, pin2)
  }


//   useEffect(() => {
//     tester()
// }, [])

  return (
    <div className="App" style={{ height: '100vh', width: '100%' }}>
    <ReactBingmaps
    bingmapKey = {process.env.REACT_APP_BING_API_KEY}
    center = {center}
    pushPins = {pins}
    >
    </ReactBingmaps>
    </div>
  );
}

export default App;
