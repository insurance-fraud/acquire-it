import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';

class Form extends Component {
  state = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  pay = event => {
    event.preventDefault();

    const { pan, securityCode, cardHolderName, expirationDate } = this.state;

    fetch('http://localhost:4001/payments/pay', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pan,
        security_code: securityCode,
        card_holder_name: cardHolderName,
        expiration_date: expirationDate,
        id: 1
      })
    });
  };

  render() {
    const { pan, securityCode, cardHolderName, expirationDate } = this.state;

    return (
      <form onSubmit={this.pay}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>PAN</ControlLabel>
          <FormControl
            type="text"
            name="pan"
            value={pan}
            placeholder="Enter PAN"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Security Code</ControlLabel>
          <FormControl
            type="text"
            name="securityCode"
            value={securityCode}
            placeholder="Enter Security Code"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Card Holder Name</ControlLabel>
          <FormControl
            type="text"
            name="cardHolderName"
            value={cardHolderName}
            placeholder="Enter Card Holder Name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Expiration Date</ControlLabel>
          <FormControl
            type="text"
            name="expirationDate"
            value={expirationDate}
            placeholder="Enter Expiration Date"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default Form;
