import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './RegistrationForm.scss';

class RegistrationForm extends PureComponent {
  render() {
    return (
      <div className="login-form-wrap">
        <div className="left-section">
          <div className="title">
            <h1>Hello!</h1>
            <p>Register your account!</p>
          </div>
          <div className="form">
            <form className="" action="index.html" method="post">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input type="text" className="conFirm" placeholder="Confirm your password" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
        <div className="right-section">
          <div className="welcome-text">
            <h1>Welcome Back</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          </div>
        </div>
      </div>
    );
  }
}

RegistrationForm.propTypes = {

};

export default RegistrationForm;