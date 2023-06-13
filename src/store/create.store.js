import { combineReducers, configureStore } from "@reduxjs/toolkit";
import callsListReducer from "./calls-list.store";

const rootReducer = combineReducers({
  calls: callsListReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
