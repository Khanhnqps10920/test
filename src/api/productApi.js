import BaseApi from './baseApi';

class ProductApi extends BaseApi {
  getResourceName() {
    return 'products';
  }
}

const productApi = new ProductApi();
export default productApi;
