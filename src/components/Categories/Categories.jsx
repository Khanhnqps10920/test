import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category';

class Categories extends PureComponent {

  render() {

    const { categories, onCategoriesClick } = this.props;

    return (
      <div>
        <div className="row align-items-center">
          <div className="col text-center">
            <div className="new_arrivals_sorting">
              <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                {
                  categories.map((c, i) => {
                    return <Category onClick={onCategoriesClick} key={c.id + i} category={c} />;
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;