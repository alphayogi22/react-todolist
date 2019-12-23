import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';
import { Router, Route } from 'react-router';
import { Switch, Link } from 'react-router-dom';

import './App.css';

import Register from './Register';

class App extends Component {
  render() {

    return (
      <Form className="login-form">
        <h1><span className="font-weight-bold">ToDoist</span>.com </h1>

        <h3 classname="text-center mt-3 md-3"> Sign In </h3>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Login</Button>

        <div classname="text-center pt2  mt-3 mb-3">
          <h6>NewUser/Sign-up</h6>
          <span className="pt-2"> | </span>
          <Router>
            <Link to={'/register'} className='nav-link'>Register</Link>
            <Switch>
              <Route path='/register' component={Register} />
            </Switch>
          </Router>
          {/* <Router>
            <Route path="/register" component={Register} />
          </Router> */}
          {/* <a href='/Register'>Register</a> */}
        </div>
      </Form>
    );
  }
}
export default App;
