import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "./configSlice";
import invoiceReducer from "./invoiceSlice";

const store = configureStore({
  reducer: {
    configurationReducer,
    invoiceReducer,
  },
});

export default store;
