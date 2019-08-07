import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NewArrival.css';
import ProductList from '../ProductList/ProductList';
import Categories from '../Categories/Categories';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import ProductGetAPI from '../../container/ProductPage/ProductGetAPI/ProductGetAPI';
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoryApi';


class NewArrival extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ctg: null,
      productList: [],
      dataFetch: false,
      categories: [],
      filter: {
        skip: 0,
        limit: 10,
        order: '',
        where: {
        }
      }

    }
  }

  async componentDidMount() {
    try {
      const filter = {
        ...this.state.filter
      }
      const params = {
        filter: JSON.stringify(filter)
      };

      const products = await productApi.getAll(params);
      const { body: productList } = products;


      const categoryList = await categoriesApi.getAll();
      const { body: categories } = categoryList;
      categories.push({ id: "all", name: "All" });

      this.setState({
        dataFetch: true,
        productList,
        categories
      })
    } catch (error) {
      console.log(error);
    }
  }



  handleCategoriesClick = async (category) => {
    this.setState({
      dataFetch: false,
    })

    let filter = { ...this.state.filter }

    try {
  

      if (category.id === "all") {
        delete filter.where.categoryId;
        this.setState({
          filter
        })
      }
      else {
        filter.where.categoryId = category.id;
        this.setState({
          filter
        })
      }


      const params = {
        filter: JSON.stringify(this.state.filter)
      }


      const products = await productApi.getAll(params);
      const { body: productList } = products;
      console.log(filter, products);

      this.setState({
        dataFetch: true,
        productList
      })
    } catch (e) {
      console.log(e);
    }

  }




  handleProductClick = (product) => {
    const { history } = this.props;
    const productDetailURL = `/shop/${product.id}`;
    history.push(productDetailURL);
  }

  handleAddToCart = (e, product) => {
    e.stopPropagation();
    this.props.onAddToCart(product);
    console.log(this.props.cartItemList);

  }


  render() {

    const { productList, categories, dataFetch } = this.state;

    let products;
    if (!dataFetch) {
      products = <p style={{
        textAlign: 'center',
        fontSize: '30px'
      }}>Đang lấy dữ liệu đợi xíu !!!!!</p>
    }
    else {
      products = <ProductList productList={productList} onProductClick={this.handleProductClick} onAddToCartClick={this.handleAddToCart} />
    }



    return (
      <div>

        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2 onClick={this.handleNewArrival}>New Arrivals</h2>
                </div>
              </div>
            </div>

            <Categories onCategoriesClick={this.handleCategoriesClick} categories={categories} />
            {products}

          </div>
        </div>
      </div>

    );
  }
}

NewArrival.propTypes = {
  cartItemList: PropTypes.array,
  onAddToCart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartItemList: state.cart.cartItemList,
  }
};

const mapActionToProps = {
  onAddToCart: addToCart
}

export default withRouter(connect(mapStateToProps, mapActionToProps)(NewArrival));