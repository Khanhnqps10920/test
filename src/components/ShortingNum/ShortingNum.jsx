import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Num from '../Num/Num';

class ShortingNum extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const { numList, onNumClick } = this.props;

    return (
      <ul className="sorting_num">
        {numList.map(num => {
          return <Num num={num} onClick={onNumClick} key={num.id} />
        })}
      </ul>
    );
  }
}

ShortingNum.propTypes = {
  numList: PropTypes.array.isRequired,
  onNumClick: PropTypes.func.isRequired,
};

export default ShortingNum;