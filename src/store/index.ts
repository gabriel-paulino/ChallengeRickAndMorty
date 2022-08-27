import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import favoriteData from "./modules/Favorite/reducer";

const rootReducers = combineReducers({
    favorites: favoriteData,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
