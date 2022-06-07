import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationButton from '../../components/buttons/NavigationButton';
import { Modal } from '../../components/modals/modal';
import { BankAccount } from '../../components/payment-methods/BankAccount';
import { Card } from '../../components/payment-methods/Card';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const PaymentMethodsScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    return (
        <SafeAreaView>
        <ScrollView>

            <View style={styles.container}>

            <View style={{ marginTop: 40 }}/>

            <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>

                <View style={styles.row}>

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
                        Payment Method
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

              </ImageBackground>

              <View style={{ marginTop: 20 }}/>
                <Text style={[styles.details, { backgroundColor: 'transparent' }]}>
                  Top-Up Wallet
                </Text>
                <View style={styles.addCard}>
                    <Card></Card>
                </View>
                <Text style={[styles.details, { backgroundColor: 'transparent' }]}>
                  Withdrawal Account
                </Text>
                <View style={styles.addCard}>
                    <BankAccount></BankAccount>
                </View>


                <View style={{marginTop: 100, backgroundColor: 'transparent'}}/>

                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={[styles.title_container]}>
                        <View style={[styles.signOutContainer, styles.shadowPropButton]}>
                            <Text style={styles.signOutText}>
                                Save
                            </Text> 
                        </View>
                    </View>
                </TouchableOpacity> */}


                <View style={{marginTop: 40}}/>

            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default PaymentMethodsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false,
      backgroundColor: 'transparent',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
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
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    details: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    addCard: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    title_container: { 
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        alignContent: 'center'
    },
    signOutContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 30,
        width: 150,
    },
    shadowPropButton: {
      shadowColor: Colors.purple,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    signOutText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 16,
        padding: 10,
    },
    bg: {

    },
})