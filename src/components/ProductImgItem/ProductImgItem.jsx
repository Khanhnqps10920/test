import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductImgItem extends PureComponent {
  render() {

    const { productImg, onClick, } = this.props;
    return (
      <li onClick={() => onClick(productImg)}><img src={productImg} alt="" data-image={productImg} /></li>
    );
  }
}

ProductImgItem.propTypes = {
  productImg: PropTypes.string,
  onClick: PropTypes.func,
};

ProductImgItem.defaultProps = {
  productImg: "",
  onClick: null,
}

export default ProductImgItem;