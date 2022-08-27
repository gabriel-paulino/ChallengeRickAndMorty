export interface ICharacter {
  id: number;
  name: string;
  image: string;
  gender: string;
}

export interface IFavorite {
  favorites: ICharacter[];
}

export interface IFavoriteState {
  favorites: {
    favorites: ICharacter[];
  };
}
