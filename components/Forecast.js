import React, {useState, useEffect } from "react";
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

export default function Forecast({ navigation, route }) {
  const [data, setData] = React.useState({});
  useEffect(() => {
    console.log("cidade", route.params.city);
    axios
      .get(
        `https://api.hgbrasil.com/weather?key=0cf39b5c&city_name=${route.params.city}`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("erro", error);
      }).finally(()=>{
        console.log("Finalizado");
      })
  }, []);
  return (
    <View style={{ paddingVertical: 30, paddingHorizontal: 15 }}>
      <View
        style={{
          height: 35,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ position: "absolute", left: 0 }}
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
    </View>
  );
}
