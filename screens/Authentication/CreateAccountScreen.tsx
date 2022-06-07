import { Dimensions, ImageBackground, ScrollView, AsyncStorage, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import InputField from '../../components/inputs/InputField';
import Colors from '../../constants/Colors';
import TransparentButton from '../../components/buttons/TransparentButton';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
const { width, height } = Dimensions.get('window');

const CreateAccountScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  var loginMethod = 'phone'
  const fullname_input = {
    field_name: 'Full name',
    placeholder: 'e.g Bright Cyph'
  }
  const email_input = {
    field_name: 'Email',
    placeholder: 'e.g Brightcyph@gmail.com'
  }
  const mobile_input = {
    field_name: 'Phone number',
    placeholder: 'e.g 0810 000 0000'
  }
  const password_input = {
    field_name: 'Password',
    placeholder: '********'
  }
  const sign_up_btn = {
    button_name: 'Continue'
  }
  const sign_up_with_google = {
    button_name: 'Sign Up with Google'
  }
  const sign_up_with_apple = {
    button_name: 'Sign Up with Apple'
  }
  const navigation_button = {
    icon_name: 'angle-left'
  }
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
                  Create
                  {'\n'}Account
              </Text>
          </View>

          <View style={[{marginTop: 20}, { backgroundColor: 'transparent' }]}/>

          </ImageBackground>

          <View style={[{marginTop: 10}]}/>
          
          <InputField onChangeText={(text) => {
            setFullname(text);
          }} field_name={ fullname_input.field_name } placeholder={ fullname_input.placeholder } ></InputField>
          <InputField onChangeText={(text) => {
            setPhone(text);
          }} field_name={ mobile_input.field_name } placeholder={ mobile_input.placeholder } ></InputField>
          <InputField onChangeText={(text) => {
            setEmail(text);
          }} field_name={ email_input.field_name } placeholder={ email_input.placeholder } ></InputField>
          
          <InputField onChangeText={(text) => {
            setPassword(text);
          }} field_name={ password_input.field_name } placeholder={ password_input.placeholder } ></InputField>
          
          <View style={styles.columnOne}>

              <Text style={styles.validator}>
                  Minimum of 8 characters
              </Text>
          </View>
          
          <View style={{marginTop: 100}}/>

          <TouchableOpacity onPress={ () => {
            var formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("phone", phone);
            formData.append("fullname", fullname);

            fetch("http://146.190.27.11/Auth/register.php", {
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
                AsyncStorage.setItem("userId", `${data.user.id}`).then(() => {
                  AsyncStorage.setItem("email", `${data.user.email}`).then(() => {
                    AsyncStorage.setItem("verifyCode", `${data.verifyCode}`).then(() => {
                      navigation.navigate('VerifyEmail');
                    })
                  })
                })
                
              }else{
                Alert.alert(`Error ${data.code}`, `${data.message}`)
              }
            })
              
          }}>
            <Button button_name={ sign_up_btn.button_name }></Button>
          </TouchableOpacity>
          <TransparentButton button_name={ sign_up_with_google.button_name }></TransparentButton>
          <TransparentButton button_name={ sign_up_with_apple.button_name }></TransparentButton>

          <View style={{marginTop: 10}}/>

          <View style={styles.divider_container}>
            <View
              style={styles.divider}
            />
          </View>

          <View style={{marginTop: 10}}/>

          <View style={styles.footer}>
              <Text style={styles.footer_body}>
                  By signing up, you agree with our <Text style={{ fontWeight: 'bold' }}>Terms & Conditions</Text>.
                  {'\n'}Learn how we process your data in our <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
              </Text>
          </View>

          <View style={{marginTop: 30}}/>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default CreateAccountScreen;

const styles = StyleSheet.create({
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
        color: Colors.blue,
        textAlign: 'right',
        width: '50%',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 12,
        includeFontPadding: false
    },
    validator: {
      color: Colors.black,
      textAlign: 'left',
      width: '50%',
      paddingLeft: 20,
      paddingRight: 20,
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
      justifyContent: 'center',
      includeFontPadding: false
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

    }
});
  