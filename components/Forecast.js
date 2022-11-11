import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import backgroundImage from "../src/images/background.png";
import {
  TituloPagina,
  TextDefault,
  BgTemperature,
  TxtTemperature,
} from "./StyledComponents";
import axios from "axios";

export default function Forecast({ navigation, route }) {
  const [data, setData] = React.useState({});
  useEffect(() => {
    console.log("ai calica");
    axios
      .get(
        `https://api.hgbrasil.com/weather?key=0cf39b5c&city_name=${route.params.city}`
      )
      .then((response) => {
        setData(response.data.results);
        console.log(data.forecast);
      })
      .catch((error) => {
        console.error("erro", error);
      })
      .finally(() => {
        console.log("Finalizado");
      });
  }, []);
  return (
    <ScrollView style={{ paddingVertical: 30, paddingHorizontal: 15 }}>
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
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            alignItems: "center",
            position: "relative",
            marginVertical: 30,
          }}
        >
          <BgTemperature source={backgroundImage} />
          <TxtTemperature>{data?.temp}°C</TxtTemperature>
        </View>
        <View style={{flexDirection:"row"}}>
          <TextDefault>Previsão dos 10 Próximos Dias</TextDefault>
          <Icon name={"chevron-forward"} size={20}></Icon>
        </View>
        <FlatList
          data={data.forecast}
          renderItem={({ item }) => (
            <View>
              <TextDefault>{item.max}</TextDefault>
            </View>
          )}
          keyExtractor={(item) => item.date}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
}
