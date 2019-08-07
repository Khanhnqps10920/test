import BaseApi from "./baseApi";

class CategoryApi extends BaseApi {
  getResourceName() {
    return 'categories';
  }
}

const categoriesApi = new CategoryApi();

export default categoriesApi;