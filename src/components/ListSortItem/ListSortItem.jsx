import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListSortItem extends PureComponent {
  render() {

    const { sortingType, onClick } = this.props;

    return (
      <li
        onClick={() => {
          return onClick(sortingType);
        }}
        className="type_sorting_btn"
      >
        <span>{sortingType.title}</span>
      </li>
    );
  }
}

ListSortItem.propTypes = {
  sortingType: PropTypes.object.isRequired
};


export default ListSortItem;