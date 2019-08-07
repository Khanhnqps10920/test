import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NumbersOfPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { pages,handleChangePage } = this.props;

    return (
      <ul className="page_selection">
        {
          pages.map((_val, idx) => {
            return <li key={idx} onClick={(e) => handleChangePage(_val)}><a href="#">{_val}</a></li>
          })
        }
      </ul>
    );
  }
}

NumbersOfPage.propTypes = {
  handleChangePage: PropTypes.func,
  pages: PropTypes.array
};

NumbersOfPage.defaultProps = {
  handleChangePage: null,
  pages: 1
}

export default NumbersOfPage;