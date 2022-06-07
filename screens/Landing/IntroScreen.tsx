import { ScrollView, AsyncStorage, Alert, Image, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import React from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

const { width, height } = Dimensions.get('window');

const IntroScreen = ({ navigation }) => {
    const create_account = {
        button_name: 'Create Account',
    }
    const sign_in = {
        button_name: 'Sign In',
        button_bg_color: Colors.blue
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
        <View style={styles.body}>

            <View style={styles.container}>
            <LinearGradient
                colors={[Colors.blue, Colors.blue]}
                >
            </LinearGradient>
            <LinearGradient
                colors={[Colors.blue, 'transparent']}
                style={styles.background}
            />
                <Image style={styles.avatar} source={require('../../assets/images/logo.png')} />
            </View>

            <View>
                <View style={{marginTop: 50}}/>

                <TouchableOpacity onPress={ () => {
                    navigation.navigate('CreateAccount')
                }}>
                    <Button button_name={ create_account.button_name }></Button>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={ () => {
                    navigation.navigate('Login')
                }}>
                    <Button button_bg_color={ sign_in.button_bg_color } button_name={ sign_in.button_name }></Button>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: 30}}/>

            <View style={styles.footer}>
              <Text style={styles.footer_body}>
                  By signing in, you agree with our <Text style={{ fontWeight: 'bold' }}>Terms & Conditions</Text>.
                  {'\n'}Learn how we process your data in our <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
              </Text>
            </View>

            <View style={{marginTop: 80}}/>

            <ImageBackground style={styles.placeholder} source={require('../../assets/images/placeholder-color.png')} />
 

        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default IntroScreen;

const styles = StyleSheet.create({
    dimensions: {
        width: width,
        height: height,
    },
    body: {
        flex: 1,
        includeFontPadding: false,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.purple,
        height: 450,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 400,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
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
    avatar: {
        width: '50%',
        resizeMode: 'contain'
    },
    placeholder: {
        height: 40,
        width: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0
    },
})