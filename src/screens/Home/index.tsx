import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../components/Card";

import { useQuery } from "@apollo/client";
import INFO_PERSON from "../../queries";
import styles from "../../components/Card/styles";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(INFO_PERSON);

  return (
    <SafeAreaView>
      {loading && <Text>Carregando ...</Text>}
      {error && <Text>Erro ...</Text>}

      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
          setCount(count + 1);//TODO: Pegar o lenght do storage
          //Abrir modal com favoritos
        }}
      >
        <View style={styles.favoritesContainer}>
          <Text>{`(${count}) Favoritos`}</Text>
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
