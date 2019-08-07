import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import Axios from 'axios';

class ProductGetAPI extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      // fetch api by productID
      const { match } = this.props;
      const productId = match.params;

      const productInfo = await Axios.get(`http://api.demo.nordiccoder.com/api/products/${productId.productId}?access_token=filter`);
      const { body: product } = productInfo.data;
      this.setState({
        product, loading: false
      });

    } catch (error) {
      console.log(error, "Lỗi nè");
    }
  }


  render() {
    const { loading, product } = this.state;
    if (loading) return <p>Loading product</p>

    return (
      <div>
        <Switch>
          <Route path="/shop/:productId" render={props => {
            console.log('props nha: ', props);
            const combineProps = {
              ...props,
              product: product,

            };

            return <ProductDetailPage {...combineProps} />
          }} />
        </Switch>
      </div>
    );
  }
}

ProductGetAPI.propTypes = {

};

export default ProductGetAPI;