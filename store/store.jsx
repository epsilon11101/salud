//redux store
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { userReducer } from "./UserData/userData.slice";
import { dayReducer } from "./DayData/dayData.slice";
import { productReducer } from "./ProductData/productData.slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
let store;

if (typeof window !== undefined) {
  const userPersistConfig = {
    key: "user-persist",
    storage,
    whitelist: ["user"],
  };

  const dayPersistConfig = {
    key: "day-persist",
    storage,
    whitelist: ["day"],
  };

  store = configureStore({
    reducer: {
      userReducer: persistReducer(userPersistConfig, userReducer),
      dayReducer: persistReducer(dayPersistConfig, dayReducer),
      productReducer,
    },
    middleware,
  });
} else {
  store = configureStore({
    reducer: {
      userReducer,
      dayReducer,
      productReducer,
    },
    middleware,
  });
}

export { store };
