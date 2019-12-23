import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <Form className="login-form">

        <h3 classname="text-center mt-3 md-3"> Registration </h3>
        <FormGroup>
          <Label>Full Name</Label>
          <Input type="Text" placeholder="Name" />
        </FormGroup>

        <FormGroup>
          <Label>Email ID</Label>
          <Input type="email" placeholder="Emails" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Register
      </Button>
      </Form>
    );
  }
}
export default Register;
