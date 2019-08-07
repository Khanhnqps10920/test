import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Shop.scss';
import ProductList from '../../components/ProductList/ProductList';
import ShopCategories from '../../components/ShopCategories/ShopCategories';
import ListSort from '../../components/ListSort/ListSort';
import ShortingNum from '../../components/ShortingNum/ShortingNum';
import Axios from 'axios';
import { addToCart } from '../../actions/cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoryApi';
import NumbersOfPage from '../../components/NumbersOfPage/NumbersOfPage';
import { async } from 'q';


class ShopPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      productList: [
      ],
      categories: [
      ],
      filterPrice: '',
      dataFetch: false,
      sortTypeItem: 'DEFAULT SORTING',
      show: 'default',
      numList: [{ title: 6, id: 1 }, { title: 12, id: 2 }, { title: 24, id: 3 }],
      pages: [],
      sortList: [
        {
          title: 'DEFAULT SORTING',
          id: ''
        },
        {
          title: 'PRICE',
          id: 'salePrice desc'
        },
        {
          title: 'PRODUCT NAME',
          id: 'name desc'
        }
      ],
      totalPage: 0,
      filter: {
        skip: 0,
        limit: 12,
        order: '',
        where: {
          and: [
            { salePrice: { gte: 0 } }
          ]
        }
      },
      currentPage: 1
    };
  };

  async componentDidMount() {
    try {
      const { filter } = this.state;
      const params = {
        filter: JSON.stringify(filter)
      }
      const data = await productApi.getAll(params);
      console.log(data);
      const { body: productList } = data;

      const { limit: limit, total: total } = data.pagination;

      const totalPage = Math.ceil((total / limit));

      const pages = new Array(totalPage);

      for (let i = 0; i < pages.length; i++) {
        pages[i] = i + 1;
      }

      console.log(totalPage, total, limit, pages);
      const categoryList = await categoriesApi.getAll();

      const { body: categories } = categoryList;

      categories.push({ id: "all", name: "All" });

      this.setState({
        dataFetch: true,
        categories,
        productList,
        totalPage,
        pages
      })


    } catch (error) {
      console.log(error);
    }
  }

  handlePriceChange = (e) => {
    this.setState({
      filterPrice: e.target.value
    })
  };

  handleFilterPrice = async (e) => {
    this.setState({
      dataFetch: false
    })
    const { filterPrice } = this.state;
    const filter = {
      ...this.state.filter
    }
    try {

      filter.where.and[0].salePrice.gte = filterPrice - 0;
      this.setState({
        filter
      })
      const params = {
        filter: JSON.stringify(filter)
      }
      const data = await productApi.getAll(params);
      console.log(data);
      const { body: productList } = data;

      this.setState({
        dataFetch: true,
        filter,
        productList
      })

    }
    catch (e) {
      console.log(e);
    }

  }

  handleCategoryClick = async (category) => {
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
        filter: JSON.stringify(filter)
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

  handleSortClick = async (sortingType) => {

    const filter = { ...this.state.filter };

    try {
      filter.order = sortingType.id;
      this.setState({
        filter
      })

      const params = {
        filter: JSON.stringify(filter)
      }

      const products = await productApi.getAll(params);
      const { body: productList } = products;
      console.log(filter, products);

      this.setState({
        productList,
        sortTypeItem: sortingType.title
      })

    } catch (e) {
      console.log(e);
    }

  }

  handleChangePageClick = async (page) => {
    this.setState({
      dataFetch: false
    })
    const filter = { ...this.state.filter };
    filter.skip = (page - 1) * filter.limit;
    this.setState({
      filter
    })

    const params = {
      filter: JSON.stringify(this.state.filter)
    }


    const products = await productApi.getAll(params);
    const { body: productList } = products;

    this.setState({
      dataFetch: true,
      productList,
      currentPage: page
    })
  }

  handleNumClick = async (num) => {

    const filter = { ...this.state.filter };

    try {

      filter.limit = num.title;
      this.setState({
        filter
      });

      const params = {
        filter: JSON.stringify(filter)
      }

      const products = await productApi.getAll(params);
      const { body: productList } = products;
      
      const { limit: limit, total: total } = products.pagination;

      const totalPage = Math.ceil((total / limit));

      const pages = new Array(totalPage);

      for (let i = 0; i < pages.length; i++) {
        pages[i] = i + 1;
      }


    
      this.setState({
        productList,
        show: num.title,
        totalPage,
        pages
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
    this.props.addToCart(product);
    console.log(this.props.cartItemList);
  }


  render() {

    let {
      productList,
      filterPrice,
      categories,
      sortList,
      sortTypeItem,
      show,
      numList,
      dataFetch,
      totalPage,
      pages,
      currentPage
    } = this.state;


    return (

      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">


            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
              </ul>
            </div>


            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ShopCategories categories={categories} onCategoryClick={this.handleCategoryClick} />
              </div>

              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Filter by Price</h5>
                </div>
                <p>
                  <input type="text" value={filterPrice} onChange={this.handlePriceChange} id="amount" />
                </p>
                <div id="slider-range"></div>
                <div className="filter_button" onClick={this.handleFilterPrice}><span>filter</span></div>
              </div>

            </div>


            <div className="main_content">


              <div className="products_iso">
                <div className="row">
                  <div className="col">


                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">{sortTypeItem}</span>
                          <i className="fa fa-angle-down"></i>
                          {/* sortList */}
                          <ListSort sortList={sortList} onSortClick={this.handleSortClick} />
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">{show}</span>
                          <ShortingNum numList={numList} onNumClick={this.handleNumClick} />
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>{currentPage}</span>
                          <NumbersOfPage handleChangePage={this.handleChangePageClick} pages={pages} />
                        </div>
                        <div className="page_total"><span>of</span>{totalPage}</div>
                      </div>

                    </div>


                    <div className="product-grid">

                      <div className="row">
                        {/* productList */}
                        {
                          dataFetch ?
                            <ProductList
                              productList={productList}
                              onAddToCartClick={this.handleAddToCart}
                              onProductClick={this.handleProductClick}
                            />
                            : <p style={{ fontSize: '30px' }}>Đang lấy dữ liệu chờ xí</p>
                        }

                      </div>
                    </div>


                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn"><span>01</span></li>
                            <li className="num_sorting_btn"><span>02</span></li>
                            <li className="num_sorting_btn"><span>03</span></li>
                            <li className="num_sorting_btn"><span>04</span></li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">Showing 1–3 of 12 results</span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                          </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

      </div >
    );
  }
}

ShopPage.propTypes = {
  addToCart: PropTypes.func
};

ShopPage.defaultProps = {
  addToCart: null
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);