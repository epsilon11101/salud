"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";

persistStore(store);

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
