import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Category extends PureComponent {
  render() {

    const { category, onClick } = this.props;
    return (
      <li
        onClick={() => {
          return onClick(category);
        }}
        className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">
        {category.name}
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  onClick: PropTypes.func
};

Category.defaultProps = {
  category: {},
  onClick: null
}

export default Category;