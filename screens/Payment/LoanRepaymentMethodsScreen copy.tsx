import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import { BankAccount } from '../../components/payment-methods/BankAccount';
import { Card } from '../../components/payment-methods/Card';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const LoanRepaymentMethodsScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const debit_card = {
      title: 'Repay with Debit Card',
      button_bg_color: Colors.purple
    }
    const bank_account = {
      bank_name_color: Colors.purple,
      button_bg_color: Colors.purple
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
                        Repayment Methods
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>
                    
                </ImageBackground>

                <View style={{ marginTop: 20 }}/>

                <View style={styles.addCard}>
                    <Card title={debit_card.title} button_bg_color={debit_card.button_bg_color}></Card>
                </View>

                <View style={styles.addCard}>
                    <BankAccount button_bg_color={bank_account.button_bg_color} bank_name_color={bank_account.bank_name_color}></BankAccount>
                </View>


                <View style={{marginTop: 100, backgroundColor: 'transparent'}}/>

                <TouchableOpacity onPress={() => navigation.navigate('Loan')}>
                    <Button button_name={'Continue'}></Button>
                </TouchableOpacity>

                <View style={{marginTop: 40}}/>

            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default LoanRepaymentMethodsScreen;

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
    columnOne: {
      width: '15%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '70%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '15%',
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
})