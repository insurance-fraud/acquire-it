import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Jumbotron, Grid } from 'react-bootstrap';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to acquire-it</h1>
          </header>
          <p>Handling insurance payments for wandering travellers</p>

          <Form />
        </Grid>
      </Jumbotron>
    );
  }
}

export default App;
