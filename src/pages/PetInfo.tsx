import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function PetInfo() {
  const navigation = useNavigation();

  return (
    <View style={styles.petInfoContainer}>
      <Image source={require("../images/image.jpg")} style={styles.petImage} />
      <Text style={styles.petInfoName}> Bob </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  petInfoContainer: {
    backgroundColor: "#fff",
    flexGrow: 1,
    height: hp("100%"),
    width: wp("100%"),
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  petImage: {
    marginTop: "5%",
    width: "30%",
    height: "20%",
    borderRadius: 20,
  },

  petInfoName: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 33,
  },
});
