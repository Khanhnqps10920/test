import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListSortItem from '../ListSortItem/ListSortItem';

class ListSort extends PureComponent {
  render() {

    const { sortList, onSortClick } = this.props;

    return (
      <ul className="sorting_type">
        {sortList.map((i) => {
          return <ListSortItem key={i.id} sortingType={i} onClick={onSortClick} />
        })}
      </ul>
    );
  }
}

ListSort.propTypes = {
  sortList: PropTypes.array,
  onSortClick: PropTypes.func,
};

ListSort.defaultProps = {
  sortList: [],
  onSortClick: null
}

export default ListSort;