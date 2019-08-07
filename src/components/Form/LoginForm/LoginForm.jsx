import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

class LoginForm extends PureComponent {
  render() {
    return (
      <div className="login-form-wrap">
        <div className="left-section">
          <div className="title">
            <h1>Hello!</h1>
            <p>sign in to your account!</p>
          </div>
          <div className="form">
            <form className="" action="index.html" method="post">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <span className="floatleft"><input type="checkbox" /> Remember me</span>
              <span className="floatright"><a href="#">Forgot Password?</a></span>
              <input type="submit" value="Sign In" />
            </form>
            <div className="create-account">
              Don,t have an Account? <a href="#">Create</a>
            </div>
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

LoginForm.propTypes = {

};

export default LoginForm;