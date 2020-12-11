import React, { Component } from 'react';
import LoginRegisterForm from './LoginRegisterForm';
import UserPage from './UserPage';
import Header from './Header';
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUsername: '',
      statusMessage: ''
    }
  }

setStatus = (message) => {
  this.setState({
    statusMessage: message
  })
}

register = async (registerInfo) => {
  console.log("register() in App.js called with the following info", registerInfo);
  const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"

  let errorToUser = ''
  try {
    const registerResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("registerResponse", registerResponse);
    const registerJson = await registerResponse.json()
    errorToUser = registerJson.message
    console.log("registerJson", registerJson);

     if(registerResponse.status === 201) {
       this.setState({
         loggedIn: true,
         loggedInUsername: registerJson.data.username
       })
       errorToUser = ''
     }
  } catch(err) {
    console.error("Error trying to register with API")
    console.error(err)
  }

  this.setStatus(errorToUser);
}

login = async (loginInfo) => {
  console.log("login() in App.js called with the following info", loginInfo);
  const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
  console.log("the url:", url)

  let errorToUser = ''
  try {
    const loginResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("loginResponse", loginResponse);
    const loginJson = await loginResponse.json()
    errorToUser = loginJson.message
    console.log("loginJson", loginJson);

    if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.data.username
        })
        errorToUser = ''
      }
  } catch(error) {
    console.error("Error trying to log in")
    console.error(error)
  }

  this.setStatus(errorToUser);
}

logout = async () => {
  try {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"

    const logoutResponse = await fetch(url, {
      credentials: 'include'
    })
    console.log("logoutResponse", logoutResponse);
    const logoutJson = await logoutResponse.json()
    console.log("logoutJson", logoutJson);

    if(logoutResponse.status === 200) {
      this.setState({
        loggedIn: false,
        loggedInUsername: ''
      })

    }

  } catch(error) {
    console.error("Error logging out")
    console.error(error)
  }
}

  render() {
    return (
      <div className="App">
            <h1>Trip Planner</h1>
        {
          this.state.loggedIn
          ?
          <React.Fragment>
            <Header username={this.state.loggedInUsername} logout={this.logout} />
            <UserPage />
          </React.Fragment>
          :
          <React.Fragment>
            <LoginRegisterForm
              login={this.login}
              register={this.register}
              statusMessage={this.statusMessage}
              setStatus={this.setStatus}
            />
            <p> {this.state.statusMessage} </p>
          </React.Fragment>
        }
      </div>
    );
  }
}
