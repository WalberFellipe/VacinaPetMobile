import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

export default function Register() {
  const navigation = useNavigation();

  function HandleNavigationToLogin() {
    navigation.navigate("Login");
  }
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.registerContainer}
      scrollEnabled={true}
    >
      <View style={styles.registerContainer}>
        <View style={styles.headerPage}>
          <View>
            <Text style={styles.registerTitle}> Cadastrar </Text>
            <Text style={styles.registerSubtitle}> Crie sua conta!</Text>
          </View>

          <View style={styles.registerComponents}>
            <Text style={styles.registerInfo}> Nome:* </Text>

            <View style={styles.userInput}>
              <Feather
                style={styles.userIcon}
                name="user"
                size={24}
                color="#000000"
              />
              <TextInput style={styles.input} />
            </View>

            <Text style={styles.registerInfo}> E-mail:* </Text>

            <View style={styles.emailInput}>
              <Feather
                style={styles.emailIcon}
                name="mail"
                size={24}
                color="#000000"
              />
              <TextInput style={styles.input} />
            </View>

            <Text style={styles.registerInfo}> Senha:* </Text>
            <View style={styles.passInput}>
              <Feather
                style={styles.lockIcon}
                name="lock"
                size={24}
                color="#000000"
              />
              <TextInput style={styles.input} />
            </View>

            <Text style={styles.registerInfo}> Confirme sua senha:* </Text>
            <View style={styles.passConfirmInput}>
              <Feather
                style={styles.lockIcon}
                name="lock"
                size={24}
                color="#000000"
              />
              <TextInput style={styles.input} />
            </View>
          </View>
          <RectButton style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Salvar</Text>
          </RectButton>
        </View>
        <View style={styles.footerPage}>
          <Text style={styles.footerText}> Já possui uma conta?</Text>
          <RectButton
            style={styles.footerButton}
            onPress={HandleNavigationToLogin}
          >
            <Text style={styles.footerButtonText}> Faça login!</Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#1670AE",
    flexGrow: 1,
    height: hp("100%"),
    width: wp("100%"),
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },

  headerPage: {
    backgroundColor: "#fff",
    height: "95%",
    borderBottomStartRadius: 45,
    borderBottomEndRadius: 45,
    shadowOffset: { height: 5, width: 1 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    position: "relative",
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },

  registerTitle: {
    marginTop: "5%",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: hp("8%"),
    color: "#17C6D1",
    marginLeft: 15,
  },
  registerSubtitle: {
    marginLeft: 25,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 15,
    color: "#858383",
  },

  registerComponents: {
    marginTop: 10,
  },

  registerInfo: {
    marginLeft: 25,
    fontSize: 23,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  userInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  passInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  passConfirmInput: {
    flexDirection: "row",
    alignItems: "center",
  },

  userIcon: {
    marginLeft: 25,
    marginTop: 5,
    position: "absolute",
  },
  emailIcon: {
    marginLeft: 25,
    marginTop: 5,
    position: "absolute",
  },
  lockIcon: {
    marginLeft: 25,
    marginTop: 5,
    position: "absolute",
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

  registerButton: {
    backgroundColor: "#1670AE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: "20%",
    marginTop: "10%",
  },
  registerButtonText: {
    color: "#fff",
    fontFamily: "Nunito_700Bold",
    fontSize: 25,
  },
  footerPage: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  footerText: {
    color: "#fff",
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
  },
  footerButton: {},
  footerButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 22,
    color: "#17C6D1",
  },
});
