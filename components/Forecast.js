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
import storm from "../src/images/storm.png";
import cloudy from "../src/images/cloudy.png";
import fog from "../src/images/fog.png";
import hail from "../src/images/hail.png";
import night from "../src/images/night.png";
import rain from "../src/images/rain.png";
import snow from "../src/images/snow.png";
import sunny from "../src/images/sunny.png";
import {
  TituloPagina,
  TextDefault,
  BgTemperature,
  TxtTemperature,
  CardDay,
} from "./StyledComponents";
import axios from "axios";

export default function Forecast({ navigation, route }) {
  const [data, setData] = React.useState({});
  const [condition, setCondition] = React.useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.hgbrasil.com/weather?key=0cf39b5c&city_name=${route.params.city}`
      )
      .then((response) => {
        setData(response.data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error("erro", error);
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
        <View style={{marginVertical: 30}}>
          <TextDefault style={{fontWeight: "bold", color: "#fa834a"}}>{data.description}</TextDefault>
          <TextDefault>Chuva em mm na última hora: {data.rain}</TextDefault>
          <TextDefault>Nebulosidade: {data.cloudiness}%</TextDefault>
          <TextDefault>Umidade: {data.humidity}%</TextDefault>
          <TextDefault>Velocidade dos Ventos: {data.wind_speedy}</TextDefault>
        </View>

        <View
          style={{ flexDirection: "row", height: 40, alignItems: "center" }}
        >
          <TextDefault>Previsão dos 10 Próximos Dias</TextDefault>
          <Icon name={"chevron-forward"} size={20}></Icon>
        </View>
        <FlatList
          data={data.forecast}
          renderItem={({ item }) => (
            <CardDay>
              <TextDefault style={{ width: "100%" }}>{item.date}</TextDefault>
              <TextDefault style={{ fontSize: 40, color: "#fa834a" }}>
                {item.max}ºC
              </TextDefault>
              <TextDefault style={{ width: "100%" }}>
                {item.description}
              </TextDefault>
            </CardDay>
          )}
          keyExtractor={(item) => item.date}
          horizontal={true}
          style={{height: 220}}
        />
      </View>
    </ScrollView>
  );
}
