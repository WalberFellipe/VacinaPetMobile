import React from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';

export default function Login () {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.upperPage}>
       <Text style={styles.loginTitle}> Login </Text>
       <Text style={styles.loginSubtitle}> Continue com sua conta!</Text>
       <Text style={styles.loginInfo}> E-mail:* </Text>
       <Feather style={styles.userIcon} name='user' size={24} color='#000000' /> 
         <TextInput
           style={styles.input}
         />
         <Text style={styles.loginInfo}> Senha:* </Text>
       <Feather style={styles.lockIcon} name='lock' size={24} color='#000000' /> 
         <TextInput
          style={styles.input} 
         />
       <RectButton style={styles.loginButton}>
         <Text style={styles.loginButtonText}>Login</Text>
       </RectButton>
      <Text style={styles.reminderPasswordText}> Lembrar Senha </Text>

       <View style={styles.iconsContainer}>
         <RectButton style={styles.googleButton} onPress={() => {}}>
          <SocialIcon style={styles.googleIcon} type='google' /> 
         </RectButton>

         <RectButton style={styles.facebookButton} onPress={() => {}}>
          <SocialIcon style={styles.facebookIcon} type='facebook'/>
         </RectButton>
       </View>

       <Text style={styles.companyName}>CELEIRO AGRONEGOCIOS</Text>

      </View>
      <View style={styles.footerPage}>
        <Text style={styles.footerText}> Não tem uma conta?</Text>
        <Text style={styles.footerRegister}>  Cadastre-se</Text>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'

  },
  loginContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 50,

  },
  upperPage: {
    
  },

  loginTitle: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 45,
    color: '#17C6D1',
    width: 200,
    marginLeft: 15,
    height: 50

  },
  loginSubtitle: {
    marginLeft: 25,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 15,
    color: '#858383',
    height: 50

  },
  loginInfo: {
    marginLeft: 25,
    fontSize: 23,
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8

  },
  userIcon: {
    marginLeft: 25,
    marginBottom:1,
  },
  lockIcon: {
    marginLeft: 25,
    marginBottom:1,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingVertical: 18,
    paddingHorizontal: 24,
    height:5,
    marginBottom: 16,
    textAlignVertical: 'top',
    marginRight: 25,
    marginLeft: 25
  },


  loginButton: {
    backgroundColor: '#1670AE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25

  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'Nunito_700Bold',
    fontSize: 25
  },
  reminderPasswordText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    marginLeft: 220
  },
  iconsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  googleButton:{
    
  },
  googleIcon: {
    marginLeft: 100,
  },
  facebookButton:{

  },
  facebookIcon: {
      marginRight: 100,
  },
  companyName: {
    fontFamily:'Nunito_600SemiBold',
    fontSize: 20,
    color: '#858383',
    marginLeft: 75,
    marginBottom: 15,
    marginTop:25
  },

  footerPage: {
    backgroundColor: '#1670AE',
    justifyContent: 'center',
    flexDirection:'row',
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    fontFamily:'Nunito_800ExtraBold',
    fontSize: 20
  },
  footerRegister: {
    color: '#17C6D1',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 25
  }
})
