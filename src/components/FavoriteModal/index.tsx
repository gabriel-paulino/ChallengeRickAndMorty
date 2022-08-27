import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  favoriteStateData,
  removeFavoritePerson,
} from "../../store/modules/Favorite/reducer";
import styles from "./styles";

export interface IModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function FavoriteModal({
  showModal,
  setShowModal,
}: IModalProps) {
  const favorites = useSelector(favoriteStateData);
  const dispatch = useDispatch();

  const handleUnFavorite = (id: number) => {
    dispatch(removeFavoritePerson(id));
  };

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <View style={styles.favoritesContainer}>
        {favorites.length > 0 ? (
          <View>
            {favorites.map((person, index) => (
              <View key={index} style={styles.personContainer}>
                <View style={styles.textContainer}>
                  <Text
                    style={styles.text}
                  >{`${person.name} - ${person.gender}`}</Text>
                </View>

                <View>
                  <TouchableOpacity onPress={() => handleUnFavorite(person.id)}>
                    <AntDesign name="close" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text>Favorite algum personagem.</Text>
          </View>
        )}
        <Button
          title="Fechar"
          onPress={() => setShowModal(!showModal)}
          color="#DD5555"
        />
      </View>
    </Modal>
  );
}
