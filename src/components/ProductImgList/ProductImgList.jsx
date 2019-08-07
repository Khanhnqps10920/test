import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductImgItem from '../ProductImgItem/ProductImgItem';

class ProductImgList extends PureComponent {
  render() {

    const { productImgList, onImageClick, className } = this.props;

    return (
      <ul>
        {
          productImgList.map((img, index) => {
            return <ProductImgItem productImg={img} key={index} onClick={onImageClick} />
          })
        }
      </ul>
    );
  }
}

ProductImgList.propTypes = {
  productImgList: PropTypes.array,
  onImageClick: PropTypes.func,
  isActive: PropTypes.string
};

ProductImgList.defaultProps = {
  productImgList: null,
  onImageClick: null,
  isActive: ""
}

export default ProductImgList;