import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { numberLiteralTypeAnnotation } from '@babel/types';

class Num extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const { num, onClick } = this.props;

    return (
      <li onClick={() => onClick(num)} className="num_sorting_btn"><span>{num.title}</span></li>
    );
  }
}

Num.propTypes = {
  num: PropTypes.object
};

Num.defaultProps = {
  num: {}
}

export default Num;