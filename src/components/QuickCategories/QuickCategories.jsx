import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './QuickCategories.css';

class QuickCategories extends PureComponent {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="banner_item align-items-center">
                  <div className="banner_category">
                    <a href="categories.html">women's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" >
                  <div className="banner_category">
                    <a href="categories.html">accessories's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" >
                  <div className="banner_category">
                    <a href="categories.html">men's</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

QuickCategories.propTypes = {

};

export default QuickCategories;