import { View, Text, Image, Button } from "react-native";
import styles from "./styles";

export interface ICardProps {
  id: number;
  name: string;
  image: string;
  gender: string;
}

export default function Card({ id, name, image, gender }: ICardProps) {

  function handleFavorite() {
    //TODO: Adicionar no storege Redux
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.imageDescriptionContainer}>
        <Text style={styles.text}>{`${name}, ${gender}`}</Text>
        <Button
        title="Favoritar"
        color="#C2C2C2"
        onPress={handleFavorite}
      />
      </View>
    </View>
  );
}
