import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/Header";
import PetRegister from "../pages/PetRegister";
import Info from "../pages/Info";
import PetInfo from "../pages/PetInfo";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Home" showCancel={false} {...props} />
            ),
          }}
        />
        <Screen
          name="PetRegister"
          component={PetRegister}
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Cadastrar Pet" showCancel={false} {...props} />
            ),
          }}
        />
        <Screen
          name="PetInfo"
          component={PetInfo}
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Seu Pet" showCancel={false} {...props} />
            ),
          }}
        />
        <Screen
          name="Info"
          component={Info}
          options={{
            headerShown: true,
            header: (props) => (
              <Header title="Vacinação" showCancel={false} {...props} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
