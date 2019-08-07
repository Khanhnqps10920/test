import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShopCategory from '../ShopCategory/ShopCategory';

class ShopCategories extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const { categories, onCategoryClick } = this.props;

    return (

      <ul className="sidebar_categories">
        {categories.map((category) => {
          return <ShopCategory key={category.id} onClick={onCategoryClick} category={category} />;
        })}
      </ul>

    );
  }
}

ShopCategories.propTypes = {
  categories: PropTypes.array,
  onCategoryClick: PropTypes.func,
};

ShopCategories.defaultProps = {
  categories: [],
  onCategoryClick: null
}

export default ShopCategories;