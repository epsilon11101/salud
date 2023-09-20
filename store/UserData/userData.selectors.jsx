export const getUserData = (state) => state.userReducer.user.userData;
export const getUser = (state) => state.userReducer.user;
export const getIsAuth = (state) => state.userReducer.user.isAuth;
export const getToken = (state) => state.userReducer.user.token;
export const getLoading = (state) => state.userReducer.isLoading;
export const getError = (state) => state.userReducer.error;
export const getUserNotAllowedProducts = (state) =>
  state.userReducer.user.userData.notAllowedProducts;
