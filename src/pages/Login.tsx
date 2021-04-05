import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

export default function Login() {
  const navigation = useNavigation();

  function HandleNavigationToRegister() {
    navigation.navigate("Register");
  }
  function HandleNavigationToHome() {
    navigation.navigate("Home");
  }

  return (
    //Subir Keyboard Ios e Android
    <KeyboardAwareScrollView
      enableOnAndroid
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.loginContainer}
      scrollEnabled={true}
    >
      <View style={styles.loginContainer}>
        <View style={styles.headerPage}>
          <View style={styles.logo}>
            <Text>CELEIRO AGRONEGOCIOS</Text>
          </View>
          <View>
            <View>
              <Text style={styles.loginTitle}> Login </Text>
              <Text style={styles.loginSubtitle}>Continue com sua conta!</Text>
            </View>

            <View style={styles.loginComponents}>
              <Text style={styles.loginInfo}> E-mail:* </Text>

              <View style={styles.emailInput}>
                <Feather
                  style={styles.userIcon}
                  name="user"
                  size={24}
                  color="#000000"
                />
                <TextInput style={styles.input} />
              </View>

              <Text style={styles.loginInfo}> Senha:* </Text>
              <View style={styles.passInput}>
                <Feather
                  style={styles.lockIcon}
                  name="lock"
                  size={24}
                  color="#000000"
                />
                <TextInput style={styles.input} />
              </View>
            </View>
            <RectButton
              style={styles.loginButton}
              onPress={HandleNavigationToHome}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </RectButton>
            <Text style={styles.reminderPasswordText}> Lembrar Senha </Text>

            <View style={styles.iconsContainer}>
              <RectButton style={styles.googleButton} onPress={() => {}}>
                <SocialIcon style={styles.googleIcon} type="google" />
              </RectButton>

              <RectButton style={styles.facebookButton} onPress={() => {}}>
                <SocialIcon style={styles.facebookIcon} type="facebook" />
              </RectButton>
            </View>

            <Text style={styles.companyName}>CELEIRO AGRONEGOCIOS</Text>
          </View>
        </View>
        <View style={styles.footerPage}>
          <Text style={styles.footerText}> Não tem uma conta?</Text>
          <RectButton
            style={styles.footerButton}
            onPress={HandleNavigationToRegister}
          >
            <Text style={styles.footerButtonText}> Cadastre-se!</Text>
          </RectButton>
        </View>
        <View></View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
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
    shadowOpacity: 0.15,
    position: "relative",
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loginTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: hp("8%"),
    color: "#17C6D1",
    marginLeft: 15,
  },
  loginSubtitle: {
    marginLeft: 25,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 15,
    color: "#858383",
  },

  loginComponents: {
    marginTop: 10,
  },

  loginInfo: {
    marginLeft: 25,
    fontSize: 23,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 8,
  },
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  passInput: {
    flexDirection: "row",
    alignItems: "center",
  },

  userIcon: {
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

  loginButton: {
    backgroundColor: "#1670AE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
  },
  loginButtonText: {
    color: "#fff",
    fontFamily: "Nunito_700Bold",
    fontSize: 25,
  },
  reminderPasswordText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    marginLeft: 220,
  },
  iconsContainer: {
    marginTop: 10,
    paddingLeft: 100,
    paddingRight: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  googleButton: {},
  googleIcon: {},
  facebookButton: {},
  facebookIcon: {},
  companyName: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: "#858383",
    textAlign: "center",
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
