import React from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default function RioDeJaneiro() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios
      .get(
        "https://api.hgbrasil.com/weather?key=c61a605c&city_name=RioDeJaneiro,RJ"
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View>
      <Text>Seja Bem Vindo</Text>

      <View>
        <Text>{data?.city}</Text>
        <FlatList
          data={data.forecast}
          renderItem={({ item }) => <Text>{item.max}</Text>}
          keyExtractor={(item) => item.date}
        />
      </View>
    </View>
  );
}
