import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RectButton } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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

  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.petContainer}>
        <View style={styles.petInfo}>
          <Text style={styles.petInfoText}>Nome do Pet</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.petInfo}>
          <Text style={styles.petInfoText}>Raça</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.petInfo}>
          <Text style={styles.petInfoText}> Data de nascimento</Text>
        </View>
        <View>
          <View style={styles.birthDate}></View>
          <Button onPress={showDatePicker} title="teste" />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          )
        </View>
      </View>
      <View style={styles.images}>
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
    marginTop: "20%",
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
  inputDate: {},
  dateComponent: {
    width: "50%",
  },
  images: {
    marginTop: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderColor: "#96D2F0",
    borderWidth: 1.4,
    borderRadius: 20,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  registerButton: {
    backgroundColor: "#1670AE",
    borderRadius: 20,
    width: "75%",
  },
  registerButtonText: {
    color: "#fff",
    fontFamily: "Nunito_700Bold",
    fontSize: 25,
  },
});
