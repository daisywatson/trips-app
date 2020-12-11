import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    color: "darkgreen",
    fontSize: "17px",
    fontWeight: "bold"
  }

  //  <span className="fake-link" onClick={props.logout}>Log out</span>
  return(
    <nav style={headerStyle}>
      Logged in as {props.username} &nbsp;
        <Button color="blue" onClick={props.logout}>Log out</Button>

    </nav>
  )
}
