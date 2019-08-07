import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                <ul className="footer_nav">
                  <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-skype"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer_nav_container">
                <div className="cr">©209999 All Rights Reserverd. This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#">Khánk</a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;