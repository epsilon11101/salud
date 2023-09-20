export const getProducts = (state) => state.productReducer.products;
export const getLoading = (state) => state.productReducer.isLoading;
export const getError = (state) => state.productReducer.error;
