import React from 'react';
import { StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const VerifyPinScreen = (props: any) => {
    return (
      <SafeAreaView>
        <ScrollView >
            <View style={styles.container}>

            <View style={{paddingTop: 50}}/>

            <View style={styles.title_container}>  
                <Text style={styles.screen_title}>
                    Enter 4-Digit Pin
                </Text>
                <View style={{paddingTop: 10}}/>
                <Text style={styles.screen_title_two}>
                    Enter your PIN to continue
                </Text>
            </View>


            <View style={{paddingTop: 60}}/>

            <Image style={styles.avatar} source={require('../../assets/images/verify-pin.png')} />

            <View style={{paddingTop: 60}}/>

            <View style={styles.columnOne}>

                <Text style={styles.validator}>
                Use <Text style={{ color: Colors.purple, fontWeight: 'bold' }}>fingerprint</Text> instead?
                </Text>

                <Text style={styles.use_email}>
                <Text style={{ color: Colors.purple, fontWeight: 'bold' }}>Forgot Pin?</Text> 
                </Text>

            </View>


            <View style={{paddingTop: 50}}/>

            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        includeFontPadding: false
    },
    avatar: {
      height: 259,
      width: 278,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    columnOne: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      includeFontPadding: false,
      justifyContent: 'space-between'
    },
    title_container: {
      flex: 1,
      padding: 15,
      textAlign: 'center',
      includeFontPadding: false,
    },
    screen_title: {
      fontSize: 20,
      color: Colors.blue,
      textAlign: 'center',
      fontWeight: 'bold',
      includeFontPadding: false
    },
    screen_title_two: {
      fontSize: 12,
      color: Colors.black,
      textAlign: 'center',
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
})

export default VerifyPinScreen;