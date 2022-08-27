import { View, Text, Image, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { favoriteStateData } from "../../store/modules/Favorite/reducer";
import { ICharacter } from "../../types";
import { addNewFavoritePerson } from "../../store/modules/Favorite/reducer";
import styles from "./styles";

export interface ICardProps {
  id: number;
  name: string;
  image: string;
  gender: string;
}

export default function Card({ id, name, image, gender }: ICardProps) {
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteStateData);

  const handleFavorite = () => {
    if (favorites.find((person) => person.id === id)) {
      Alert.alert('Aviso',`O personagem ${name} já é um favorito!`);
      return;
    };

    let character = {
      id: id,
      name: name,
      image: image,
      gender: gender,
    } as ICharacter;

    dispatch(addNewFavoritePerson(character));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.imageDescriptionContainer}>
        <Text style={styles.text}>{`${name}, ${gender}`}</Text>
        <Button title="Favoritar" color="#C2C2C2" onPress={handleFavorite} />
      </View>
    </View>
  );
}
