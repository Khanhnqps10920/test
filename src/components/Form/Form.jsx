import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Form extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/form/login" component={LoginForm} />
          <Route path="/form/register" component={RegistrationForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

Form.propTypes = {

};

export default Form;