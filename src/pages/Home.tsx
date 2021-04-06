import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export default function Home() {
  const navigation = useNavigation();

  function HandleNavigationToPetRegister() {
    navigation.navigate("PetRegister");
  }

  function HandleNavigationToInfo() {
    navigation.navigate("Info");
  }

  function HandleNavigationToPetInfo() {
    navigation.navigate("PetInfo");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.petInfoButton}
        onPress={HandleNavigationToPetInfo}
      >
        <Image
          source={require("../images/image.jpg")}
          style={styles.petInfoImage}
        />

        <Text style={styles.petInfoText}>Bob</Text>
        {/* <Text style={styles.petInfoSubText}>
          1 ano - 270 dias para reforço anual
        </Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.registerButton}
        onPress={HandleNavigationToPetRegister}
      >
        <Text style={styles.registerButtonText}>
          Clique aqui para cadastrar seu pet
        </Text>
      </TouchableOpacity>

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
    borderWidth: 1,
    borderColor: "#1670AE",
    color: "#1670AE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    width: "80%",
    height: "15%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  registerButtonText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 15,
  },
  petInfoButton: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#1670AE",
    color: "#1670AE",
    borderRadius: 20,
    alignItems: "center",
    marginTop: "5%",
    width: "80%",
    height: "15%",
    marginLeft: "10%",
    marginRight: "10%",
    flexDirection: "row",
  },
  petInfoImage: {
    marginLeft: "0%",
    width: "30%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  petInfoText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 30,
    marginLeft: "25%",
  },
  petInfoSubText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 12,
    marginLeft: "25%",
  },

  infoButton: {
    backgroundColor: "#F5F5F5",
    borderColor: "#1670AE",
    color: "#1670AE",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
    width: "80%",
    height: "15%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  infoButtonText: {
    color: "#000000",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 15,
  },
});
