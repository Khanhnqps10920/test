import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ShopCategory extends PureComponent {
  render() {

    const { category, onClick } = this.props;

    return (
      <li
        onClick={(e) => {
          e.preventDefault();
          return onClick(category);
        }}
      >
        <a href="#">{category.name}</a>
      </li>
    );
  }
}

ShopCategory.propTypes = {
  category: PropTypes.object,
  onClick: PropTypes.func
};

ShopCategory.defaultProps = {
  category: {},
  onClick: null
}

export default ShopCategory;