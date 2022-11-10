import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TituloPagina } from "./StyledComponents";
import axios from "axios";

export default function Fortaleza({ navigation }) {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios
      .get("https://api.hgbrasil.com/weather?key=0cf39b5cc&city_name=SãoPaulo,SP")
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <ScrollView style={{ paddingVertical: 30, paddingHorizontal: 15 }}>
      <View style={{ height: 35, flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{position: "absolute", left: 0}}
        >
          <Icon name={"arrow-back-circle-outline"} size={35} />
        </TouchableOpacity>
        <TituloPagina>{data?.city}</TituloPagina>
      </View>
      <Text>Seja Bem Vindo</Text>
      <FlatList
        data={data.forecast}
        renderItem={({ item }) => <Text>{item.max}</Text>}
        keyExtractor={(item) => item.date}
      />
    </ScrollView>
  );
}