import React, { useState } from 'react';
import { Alert, AsyncStorage, Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SingleList } from '../../components/lists/SingleList';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import * as LocalAuthentication from 'expo-local-authentication';
const { width, height } = Dimensions.get('window');


const SecurityScreen = ({ navigation }) => {
    const [biometricsIsEnabled, setBiometricsIsEnabled] = useState(false);
    const [pinIsEnabled, setPinIsEnabled] = useState(false);
    AsyncStorage.getItem("biometric").then((biometric) => {
        
        if(biometric !== null){
            setBiometricsIsEnabled(true);
        }
    })
    const toggleBiometricsSwitch = () => {
        setBiometricsIsEnabled(previousState => !previousState);
        
        if(biometricsIsEnabled === false){
            let options = {
                promptMessage: "Enable Biometric",
                cancelLabel: "Cancel"
              }        
              LocalAuthentication.authenticateAsync(options).then((res) => {
                console.log(res)
                var success = res.success;
                if(success === true){
                    Alert.alert("Success", "App locked successfully. Biometric would now be required for sign in.")
                    AsyncStorage.setItem("biometric", "Yes");
                    
                }else{
                    Alert.alert("Error", "An error occurred, please retry again");
                }
            })
        }else{
            let options = {
                promptMessage: "Secure Login",
                cancelLabel: "Cancel"
              }        
              LocalAuthentication.authenticateAsync(options).then((res) => {
                console.log(res)
                var success = res.success;
                if(success === true){
                    AsyncStorage.removeItem("biometric");
                    Alert.alert("Success", "Biometric signin deactivated successfully.");
                }else{
                    Alert.alert("Error", "An error occurred, please retry again");
                }
            })
        }

    };
    const togglePinSwitch = () => setPinIsEnabled(previousState => !previousState);
    const navigation_button = {
      icon_name: 'angle-left'
    }
    return (
        <SafeAreaView>
            <ScrollView>

            <View style={styles.container}>

            <View style={{ marginTop: 40 }}/>

                <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>

                <View style={styles.rowContainer}>

                    <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
                    <View style={[styles.divider_container, { backgroundColor: 'transparent' }]}>  
                        <TouchableOpacity onPress={ () => {
                            navigation.goBack() 
                        }}>
                        <NavigationButton icon_name={navigation_button.icon_name} ></NavigationButton>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={[styles.columnTwo, { backgroundColor: 'transparent' }]}>
                    <Text style={[styles.details, { backgroundColor: 'transparent' }]}>
                        Security
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 30 }}/>

                <View style={styles.rowThree}>
                    <Text style={styles.heading}>
                    ACCOUNT SECURITY
                    </Text>
                </View>
                <View style={[styles.divider_container_two]}>
                    <View
                        style={styles.divider}
                    />
                </View>

                <View style={styles.rowTwo}>
                        <View style={styles.columnFour}>
                            <Text style={styles.bio}>
                                Biometrics
                            </Text>
                            <Text style={styles.bioTwo}>
                                4 Digit Pin
                            </Text>
                        </View>
                        <View style={styles.columnFive}>
                            <View style={{ paddingRight: 30 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: '#f8cffd' }}
                                    thumbColor={biometricsIsEnabled ? Colors.purple : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleBiometricsSwitch}
                                    style={{ alignSelf: 'flex-end' }}
                                    value={biometricsIsEnabled}
                                />
                            </View>
                            <View style={{ paddingRight: 30 }}>
                                <Switch
                                    trackColor={{ false: "#767577", true: '#f8cffd' }}
                                    thumbColor={pinIsEnabled ? Colors.purple : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={togglePinSwitch}
                                    style={{ alignSelf: 'flex-end' }}
                                    value={pinIsEnabled}
                                />
                            </View>
                        </View>
                </View>

                {/* <View style={[styles.list]}>
                    <TouchableOpacity onPress={() => navigation.navigate('BiometricManagement')}>
                        <SingleList icon='barcode' name='Biometric Management'></SingleList>
                    </TouchableOpacity>
                </View>  */}

                {/* <View style={[styles.list]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SetPin')}>
                        <SingleList icon='lock' name='Two-Factor Authentication'></SingleList>
                    </TouchableOpacity>
                </View>  */}

                <View style={[styles.list]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SetPin')}>
                        <SingleList icon='mobile' name='Change Pin'></SingleList>
                    </TouchableOpacity>
                </View> 

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SecurityScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false,
      backgroundColor: 'transparent',
    },
    rowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    bg: {

    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      backgroundColor: 'transparent',
    },
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    columnOne: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    columnFour: {
      width: '70%',
      backgroundColor: 'transparent',
    },
    columnFive: {
      width: '30%',
      backgroundColor: 'transparent',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    details: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    heading: {
      fontWeight: 'bold',
      color: Colors.black,
      fontSize: 14,
      paddingLeft: 40,
      paddingTop: 20,
    },
    divider: {
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    divider_container_two: {
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.white,
    },
    bio: {
        marginTop: 15,
        fontSize: 16,
        paddingLeft: 30,
    },
    bioTwo: {
        marginTop: 20,
        fontSize: 16,
        paddingLeft: 30,
    }
})

function setBiometricsIsEnabled(arg0: (previousState: any) => boolean) {
    throw new Error('Function not implemented.');
}
function setPinIsEnabled(arg0: (previousState: any) => boolean) {
    throw new Error('Function not implemented.');
}

