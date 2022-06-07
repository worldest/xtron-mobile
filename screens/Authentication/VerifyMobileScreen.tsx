import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SingleInputField from '../../components/inputs/SingleInputField';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerifyMobileScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    return (
      <SafeAreaView>
        <ScrollView>
            <View style={styles.body}>

                <View style={styles.columnOne}>
                    <View style={styles.divider_container}>  
                        <TouchableOpacity onPress={ () => {
                            navigation.goBack() 
                        }}>
                        <NavigationButton icon_name={navigation_button.icon_name} ></NavigationButton>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.title_container}>  
                        <Text style={styles.screen_title}>
                        Verify your
                        {'\n'}phone number
                        </Text>
                    </View>
                </View>

                <View style={{paddingTop: 10}}/>

                <Image style={styles.avatar} source={require('../../assets/images/verify-phone.png')} />

                <View style={{paddingTop: 20}}/>

                <View style={styles.footer}>
                <Text style={styles.footer_body}>
                    Please enter the 6-digit verification code we have sent to
                    {'\n'}<Text style={{ color: Colors.purple, fontWeight: 'bold' }}>+234 810 0000 000</Text>
                </Text>
                </View>

                <View style={{paddingTop: 40}}/>

                <TouchableOpacity onPress={ () => {
                  navigation.navigate('SetPin') 
                }}>
                <View style={styles.inputColumn}>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                    <View style={styles.single_input}>  
                        <SingleInputField></SingleInputField>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={styles.moreOptions}>

                    <Text style={styles.resend}>
                        Resend
                    </Text>

                    <Text style={styles.time}>
                        59 secs left
                    </Text>

                </View>


                <View style={{paddingTop: 100}}/>

            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default VerifyMobileScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        includeFontPadding: false
    },
    avatar: {
      height: 341,
      width: 284,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false,
      width: '25%'
    },
    title_container: {
      padding: 15,
      includeFontPadding: false,
      width: '50%'
    },
    screen_title: {
      fontSize: 20,
      color: Colors.blue,
      textAlign: 'center',
      fontWeight: 'bold',
      includeFontPadding: false
    },
    columnOne: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
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
    inputColumn: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignSelf: 'center',
      includeFontPadding: false,
      paddingLeft: 5,
      paddingRight: 5,
    },
    single_input: {
      includeFontPadding: false,
      width: '16%',
      padding: 5
    },
    moreOptions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      includeFontPadding: false
    },
    time: {
        color: Colors.black,
        textAlign: 'right',
        width: '50%',
        fontSize: 12,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    resend: {
      fontWeight: 'bold',
      color: Colors.blue,
      textAlign: 'left',
      width: '50%',
      fontSize: 12,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      includeFontPadding: false
    },
})
