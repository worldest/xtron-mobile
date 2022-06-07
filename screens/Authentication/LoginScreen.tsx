import { ScrollView, Dimensions, StyleSheet, TouchableOpacity, Platform, ImageBackground, AsyncStorage, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import InputField from '../../components/inputs/InputField';
import Colors from '../../constants/Colors';
import TransparentButton from '../../components/buttons/TransparentButton';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
import * as LocalAuthentication from 'expo-local-authentication';

const email_input = {
  field_name: 'Email',
  placeholder: 'e.g Brightcyph@gmail.com'
}
const mobile_input = {
  field_name: 'Mobile number',
  placeholder: 'e.g 0810 000 0000'
}
const password_input = {
  icon_name: 'eye',
  field_name: 'Password',
  placeholder: '********',
}
var email;
var password;
function loginMode() {
  const [mobileLogin, onChange] = useState(false);

  function onLoginModeChanged() {
    onChange(!mobileLogin);
  }

  return (
    <View style={{ backgroundColor: 'transparent' }}>
      {
        mobileLogin 
        ? <InputField onChangeText={(phone) => {
          email = phone;
          console.log(email)
        }} field_name={ mobile_input.field_name } placeholder={ mobile_input.placeholder } ></InputField>
        : <InputField onChangeText={(email_txt) => {
          email = email_txt;
          console.log(email)
        }} field_name={ email_input.field_name } placeholder={ email_input.placeholder } ></InputField> 
      }
    
      <InputField onChangeText={(password_txt) => {
          password = password_txt;
          console.log(password)
        }} field_name={ password_input.field_name } placeholder={ password_input.placeholder } icon_name={ password_input.icon_name } ></InputField>
          
      <View style={styles.columnOne}>
        {
          mobileLogin
          ? <Text onPress={ () => onLoginModeChanged() } style={styles.use_email}>
              Use email instead?
            </Text>
          : <Text onPress={ () => onLoginModeChanged() } style={styles.use_email}>
              Use phone number instead?
          </Text>
        }

      </View>
    </View>
  );
}

const LoginScreen = ({ navigation }) => {
  const sign_in_btn = {
    button_name: 'Sign In'
  }
  const sign_in_with_google = {
    button_name: 'Sign In with Google'
  }
  const sign_in_with_apple = {
    button_name: 'Sign In with Apple'
  }
  const navigation_button = {
    icon_name: 'angle-left'
  }
  AsyncStorage.getItem("userId").then((user) => {
    if(user !== null && user !== undefined){
        AsyncStorage.getItem("biometric").then((biometric) => {
    
            if(biometric !== null){
                let options = {
                    promptMessage: "Unlock App",
                    cancelLabel: "Cancel"
                  }        
                  LocalAuthentication.authenticateAsync(options).then((res) => {
                    console.log(res)
                    var success = res.success;
                    if(success === true){                            
                        navigation.navigate("Tabs");
                    }else{
                        Alert.alert("Error", "An error occurred, please retry again");
                    }
                })
            }else{
              navigation.navigate("Tabs");
            }
        })
      
    }
  })
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>

          <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>
            
          <View style={[styles.divider_container, { backgroundColor: 'transparent' }]}>  
              <TouchableOpacity onPress={ () => {
                  navigation.goBack() 
                }}>
                <NavigationButton icon_name={navigation_button.icon_name} ></NavigationButton>
              </TouchableOpacity>
          </View>
          
          <View style={[{marginTop: 10}, { backgroundColor: 'transparent' }]}/>

          <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
              <Text style={styles.screen_title}>
                  Sign In
              </Text>
          </View>

          <View style={[{marginTop: 20}, { backgroundColor: 'transparent' }]}/>

          </ImageBackground>

          <View style={[{marginTop: 10}]}/>

          { loginMode() }
          
          <View style={{marginTop: 120}}/>

          <TouchableOpacity onPress={ () => {
            var data = {
              email: `${email}`,
              password: `${password}`
            }
            var formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);

            fetch("http://146.190.27.11/Auth/login.php", {
              method: "POST",
              body: formData,
              // headers: {
              //   "Content-Type" : "application/json"
              // }
            })
            .then(response => response.json())
            .then((data) => {
              console.log(data);
              if(data.code == 200){
                AsyncStorage.setItem("userId", `${data.user.ID}`).then(() => {
                  AsyncStorage.setItem("email", `${data.user.email}`).then(() => {
                    navigation.navigate('Tabs') 
                  })
                })
                
              }else{
                Alert.alert(`Error ${data.code}`, `${data.message}`)
              }
            })
                  
          }}>
            <Button button_name={ sign_in_btn.button_name }></Button>
          </TouchableOpacity>

          <TransparentButton button_name={ sign_in_with_google.button_name }></TransparentButton>
          <TransparentButton button_name={ sign_in_with_apple.button_name }></TransparentButton>

          <View style={{marginTop: 10}}/>

          <View style={styles.divider_container}>
            <View
              style={styles.divider}
            />
          </View>

          <View style={{marginTop: 50}}/>

          <View style={styles.footer}>
              <Text style={styles.footer_body}>
                  By signing in, you agree with our <Text style={{ fontWeight: 'bold' }}>Terms & Conditions</Text>.
                  {'\n'}Learn how we process your data in our <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
              </Text>
          </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    iosStatusBar: {
      height: (Platform.OS === 'ios') ? 18 : 0, 
      backgroundColor: "white",
    },
    container: {
      flex: 1,
      includeFontPadding: false
    },
    columnOne: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      includeFontPadding: false
    },
    use_email: {
        fontWeight: 'bold',
        marginVertical: 20,

        color: Colors.blue,
        textAlign: 'right',
        width: '50%',
        paddingRight: 20,
        fontSize: 14,
        marginHorizontal: 20,
        includeFontPadding: false
    },
    validator: {
      color: Colors.black,
      textAlign: 'left',
      width: '50%',
      paddingLeft: 20,
      fontSize: 12,
      includeFontPadding: false
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    divider: {
      borderBottomColor: Colors.black,
      borderBottomWidth: 1,
      includeFontPadding: false
    },
    footer: {
      position: 'absolute', 
      bottom: 20,
    },
    footer_body: {
      flex: 1,
      fontSize: 12,
      paddingLeft: 30,
      paddingRight: 30,
      color: Colors.black,
      textAlign: 'center',
      includeFontPadding: false
    },
    screen_title: {
      fontSize: 30,
      color: Colors.blue,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingRight: 20,
      includeFontPadding: false
    },
    bg: {

    },
});
