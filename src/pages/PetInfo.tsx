import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function PetInfo() {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.petInfoContainer}>
      <TouchableOpacity activeOpacity={0.5} style={styles.petInfoButton}>
        <Image
          source={require("../images/image.jpg")}
          style={styles.petInfoImage}
        />
        <Text style={styles.petInfoText}>Bob</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
  petInfoButton: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#1670AE",
    color: "#1670AE",
    borderRadius: 75,
    alignItems: "center",
    marginTop: "5%",
    width: "35%",
    height: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    flexDirection: "column",
  },
  petInfoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },

  petInfoText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 33,
  },
});
