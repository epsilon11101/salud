export const getDay = (state) => state.dayReducer.day;
export const getDaily = (state) => state.dayReducer.day.daily;
export const getProducts = (state) => state.dayReducer.day.products;
export const getDate = (state) => state.dayReducer.day.date;
export const getLoading = (state) => state.dayReducer.isLoading;
export const getError = (state) => state.dayReducer.error;
