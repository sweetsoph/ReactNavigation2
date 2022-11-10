import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import SaoPaulo from "../src/images/sao_paulo.jpg";
import RioDeJaneiro from "../src/images/rio_de_janeiro.jpg";
import Curitiba from "../src/images/curitiba.jpg";
import Fortaleza from "../src/images/fortaleza.jpg";
import Vitoria from "../src/images/vitoria.jpg";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Seja Bem Vindo</Text>
        <Text style={styles.texto}>
          Você pode consultar a previsão do tempo das seguintes capitais do
          Brasil:
        </Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("São Paulo")}
          >
            <Image style={styles.btnImage} source={SaoPaulo} />
            <Text style={styles.txtBotao}>São Paulo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Rio de Janeiro")}
          >
            <Image style={styles.btnImage} source={RioDeJaneiro} />
            <Text style={styles.txtBotao}>Rio de Janeiro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Curitiba")}
          >
            <Image style={styles.btnImage} source={Curitiba} />
            <Text style={styles.txtBotao}>Curitiba</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Fortaleza")}
          >
            <Image style={styles.btnImage} source={Fortaleza} />
            <Text style={styles.txtBotao}>Fortaleza</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Vitória")}
          >
            <Image style={styles.btnImage} source={Vitoria} />
            <Text style={styles.txtBotao}>Vitória</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bloco: {
    margin: 20,
  },
  titulo: {
    fontSize: 30,
  },
  texto: {
    fontSize: 20,
  },
  cardsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#389174",
    width: "45%",
  },
  btnImage: {
    width: "100%",
    height: 120,
  },
  txtBotao: {
    fontSize: 20,
    height: 30,
    color: "#FFF",
    textAlign: "center",
  },
});
