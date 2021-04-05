import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  const navigation = useNavigation();

  function HandleNavigationToPetRegister() {
    navigation.navigate("PetRegister");
  }

  function HandleNavigationToInfo() {
    navigation.navigate("Info");
  }
  return (
    <View style={styles.container}>
      <View></View>
      <RectButton
        style={styles.registerButton}
        onPress={HandleNavigationToPetRegister}
      >
        <Text style={styles.registerButtonText}>
          Clique aqui para cadastrar seu pet
        </Text>
      </RectButton>

      <RectButton style={styles.infoButton} onPress={HandleNavigationToInfo}>
        <Text style={styles.infoButtonText}>
          Saiba mais sobre o fluxo de vacinação
        </Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: hp("100%"),
    width: wp("100%"),
    display: "flex",
  },
  registerButton: {
    backgroundColor: "#F5F5F5",
    borderColor: "#1670AE",
    color: "#1670AE",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    width: "70%",
    height: "10%",
    marginLeft: "15%",
    marginRight: "15%",
  },
  registerButtonText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 15,
  },

  infoButton: {
    backgroundColor: "#F5F5F5",
    borderColor: "#1670AE",
    color: "#1670AE",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80%",
    width: "70%",
    height: "10%",
    marginLeft: "15%",
    marginRight: "15%",
  },
  infoButtonText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 15,
  },
});
