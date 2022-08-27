import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  favoriteStateData,
  removeFavoritePerson,
} from "../../store/modules/Favorite/reducer";
import Card from "../../components/Card";
import { useQuery } from "@apollo/client";
import INFO_PERSON from "../../queries";
import styles from "../../components/Card/styles";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(INFO_PERSON);
  const favorites = useSelector(favoriteStateData);

  return (
    <SafeAreaView>
      {loading && <Text>Carregando ...</Text>}
      {error && <Text>Erro ...</Text>}

      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
          console.log(favorites);
          //Abrir modal com favoritos
        }}
      >
        <View style={styles.favoritesContainer}>
          <Text>{`(${favorites?.length ?? 0}) Favoritos`}</Text>
          <View style={styles.starIconContainer}>
            <AntDesign name="star" size={24} color="#F0E68C" />
          </View>
        </View>
      </TouchableOpacity>

      {data && (
        <FlatList
          data={data.characters.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              gender={item.gender}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
