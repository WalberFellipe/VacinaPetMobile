import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Info() {
  const navigation = useNavigation();

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoComponents}>
        {/*==== PRIMEIRO GRID ====*/}
        <View style={styles.row1}>
          <Text style={styles.column1}>1ª Dose</Text>
          <Text style={styles.column2}>45 dias de vida</Text>
          <Text style={styles.column3}>V3, V8 ou V11</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>2ª Dose</Text>
          <Text style={styles.column2}>21 dias após 1ª dose</Text>
          <Text style={styles.column3}>V3, V8 ou V11</Text>
        </View>

        <View style={styles.row1}>
          <Text style={styles.column1}>3ª Dose</Text>
          <Text style={styles.column2}>21 dias após 2ª dose</Text>
          <Text style={styles.column3}>V3, V8 ou V11</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>4ª Dose</Text>
          <Text style={styles.column2}>21 dias após 3ª dose</Text>
          <Text style={styles.column3}>V3, V8 ou V11</Text>
        </View>

        <View style={styles.row1}>
          <Text style={styles.column1}>Antirrábica</Text>
          <Text style={styles.column2}>5 a 6 meses de vida</Text>
          <Text style={styles.column3}>Antirrábica</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>Reforço anual</Text>
          <Text style={styles.column2}></Text>
          <Text style={styles.column3}>V3, V8 ou V11 e Antirrábica</Text>
        </View>
        {/*==== SEGUNDO GRID ====*/}
        <View style={styles.extraInfo}>
          <Text style={styles.infoTittle}> INFORMAÇÕES ADICIONAIS</Text>
        </View>

        <View style={styles.row1}>
          <Text style={styles.column1}>Castração</Text>
          <Text style={styles.column3}>45 dias de vida</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>1ª Tosa</Text>
          <Text style={styles.column3}>A partir do 3º mês de vida</Text>
        </View>

        <View style={styles.row1}>
          <Text style={styles.column1}>Queda dos dentes de leite</Text>
          <Text style={styles.column3}>Entre 4 a 5 meses</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>Gestação das cadelas</Text>
          <Text style={styles.column3}>58 a 62 dias</Text>
        </View>

        <View style={styles.row1}>
          <Text style={styles.column1}>Desmame da ninhada</Text>
          <Text style={styles.column3}>30 a 40 dias de vida</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>Primeiro cio da cadela</Text>
          <Text style={styles.column3}>Entre o 6º e 12º mês</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.column1}>Frequência do cio</Text>
          <Text style={styles.column3}>6 em 6 meses</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "#fff",
    flexGrow: 1,
    height: hp("100%"),
    width: wp("100%"),
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  infoComponents: {
    marginTop: "5%",
    justifyContent: "center",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C4C4C4",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column1: {
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
  },
  column2: {
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
  },
  column3: {
    fontFamily: "Nunito_700Bold",
    fontSize: 12,
  },
  extraInfo: {
    alignItems: "center",
    marginTop: "10%",
  },
  infoTittle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
  },
});
