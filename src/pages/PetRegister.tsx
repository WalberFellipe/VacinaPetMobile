import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { RectButton } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
//função para solicitar acesso a galeria

export default function PetRegister() {
  const navigation = useNavigation();

  function HandleNavigationToHome() {
    navigation.navigate("Home");
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      alert(
        "Desculpe! Precisamos de acesso às suas fotos para fazer com que isto funcione!"
      );
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);
  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        <View style={styles.petContainer}>
          <View style={styles.petInfo}>
            <Text style={styles.petInfoText}>Nome do Pet</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.petInfo}>
            <Text style={styles.petInfoText}>
              Data de Nascimento (dd/mm/aaaa)
            </Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.petInfo}>
            <Text style={styles.petInfoText}>Raça</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.petInfo}>
            <Text style={styles.petInfoText}>Peso</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.petInfo}>
          <Text style={styles.petInfoText}>Foto do pet</Text>
          <TouchableOpacity
            style={styles.imagesInput}
            onPress={handleSelectImages}
          >
            <Feather name="plus" size={24} color="#15B6D6" />
          </TouchableOpacity>
          <RectButton
            style={styles.registerButton}
            onPress={HandleNavigationToHome}
          >
            <Text style={styles.registerButtonText}>Salvar</Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: hp("100%"),
    width: wp("100%"),
    display: "flex",
  },
  petContainer: {
    marginTop: "10%",
  },
  petInfo: {
    marginLeft: 25,
    fontSize: 23,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  petInfoText: {
    flexDirection: "row",
    alignItems: "center",
  },
  birthDate: {
    marginLeft: 25,
    marginRight: 25,
    fontSize: 23,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  birthDateText: {
    marginLeft: 25,
    fontSize: 23,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  input: {
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginTop: 15,
    paddingHorizontal: 24,
    marginBottom: 16,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 20,
    textAlignVertical: "top",
    marginLeft: 25,
    width: "85%",
  },
  imagesInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderColor: "#96D2F0",
    borderWidth: 1.4,
    borderRadius: 20,
    width: "50%",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
    marginRight: "25%",
    marginLeft: "25%",
  },
  registerButton: {
    backgroundColor: "#1670AE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: "20%",
    marginTop: "5%",
  },
  registerButtonText: {
    color: "#fff",
    fontFamily: "Nunito_700Bold",
    fontSize: 25,
  },
});
