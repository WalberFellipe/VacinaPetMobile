import React from 'react';
import { ScrollView, Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Login() {
    return(
        <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}> Login </Text>
            <Text style={styles.loginSubtitle}> Continue com sua conta!</Text>
            <Text style={styles.loginInfo}> E-mail:* </Text>
            <TextInput
            style={styles.input}/>
            <Text style={styles.loginInfo}> Senha:* </Text>
            <TextInput
            style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    loginContainer: {
        
    },
    loginTitle: {
        fontFamily: 'Nunito_700SemiBold'
    },
    loginSubtitle: {

    },
    loginInfo: {

    },
    input: {

    }
})