import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFavorite, ICharacter, IFavoriteState } from "../../../types";

const initialState = {
  favorites: [],
};

const FavoriteData = createSlice({
  name: "favoriteData",
  initialState,
  reducers: {
    addNewFavoritePerson: (
      state: IFavorite,
      action: PayloadAction<ICharacter>
    ) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoritePerson: (state: IFavorite, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addNewFavoritePerson } = FavoriteData.actions;
export const { removeFavoritePerson } = FavoriteData.actions;

export const favoriteStateData = (state: IFavoriteState) =>
  state.favorites.favorites;

export default FavoriteData.reducer;
