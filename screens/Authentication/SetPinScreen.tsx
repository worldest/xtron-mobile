import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SingleInputField from '../../components/inputs/SingleInputField';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SetPinScreen = ({ navigation }) => {
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
                        Enter 4-Digit Pin
                        {'\n'}for Quick Access
                        </Text>
                    </View>
                    <View style={styles.divider_container}>  

                    </View>
                </View>

                <View style={{paddingTop: 60}}/>

                <Image style={styles.avatar} source={require('../../assets/images/verify-pin.png')} />

                <View style={{paddingTop: 60}}/>

                <View style={styles.footer}>
                <Text style={styles.footer_body}>
                   Use this PIN to unlock the app
                </Text>
                </View>

                <View style={{paddingTop: 50}}/>

                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
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
                    </View>
                </TouchableOpacity>


                <View style={{paddingTop: 50}}/>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={ () => {
                        navigation.navigate('FingerPrint')
                    }}>
                        <Text style={styles.footer_body}>
                        Use <Text style={{ color: Colors.purple, fontWeight: 'bold' }}>fingerprint</Text> instead?
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{paddingTop: 100}}/>

            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default SetPinScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        includeFontPadding: false
    },
    avatar: {
      height: 259,
      width: 278,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false,
      width: '20%'
    },
    title_container: {
      padding: 15,
      includeFontPadding: false,
      width: '60%'
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
      paddingLeft: 30,
      paddingRight: 30,
      includeFontPadding: false,
    },
    single_input: {
      includeFontPadding: false,
      width: '25%',
      padding: 5
    },
})
