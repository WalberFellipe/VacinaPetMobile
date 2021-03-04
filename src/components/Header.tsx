import React from "react";
import { Feather } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface HeaderProps extends StackHeaderProps {
  showCancel?: boolean;
  title: string;
}

export default function Header({
  showCancel = true,
  title,
  navigation,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={30} color="#333333"></Feather>
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#dde3f0",
    paddingTop: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#17C6D1",
    fontSize: 22,
    paddingRight: "42%",
  },
});
