import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SmallTransparentButton from '../../components/buttons/SmallTransparentButton';
import { CouponCard } from '../../components/cards/CouponCard';
import LoanPaymentInputField from '../../components/inputs/LoanPaymentInputField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const RepayLoanScreen = ({ navigation }) => {
    const navigation_button = {
        icon_name: 'angle-left'
    }
    const coupons_btn = {
        text: 'Available: 3',
        border_color: Colors.blue,
        text_color: Colors.blue,
        icon: 'chevron-right',
        font_color: Colors.blue,
        font_size: 14,
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
                            Loan Details
                        </Text>
                        </View>
                        <View style={styles.columnThree}>

                        </View>
                        
                    </View>
                    
                    </ImageBackground>

                    <View style={{ marginTop: 20 }}/>

                    <View style={{ padding: 15 }}>
                        <View style={styles.notification}>
                            <Text style={styles.notificationText}>
                                <Icon
                                    style={styles.icon}
                                    name='exclamation'
                                    color={Colors.purple} /> &nbsp; Please ensure to pay on time, overdue loans attract a 2.0% penalty charge
                            </Text>
                        </View>
                    </View>

                    <View style={styles.loanAmountContainer}>
                        <Text style={{ fontSize: 12, color: Colors.black }}>
                            Loan Amount
                        </Text>
                        <Text style={styles.loanAmount}>
                            N25,000.00
                        </Text>
                    </View>

                    <View style={[ {paddingTop: 20, paddingLeft: 20, paddingRight: 20} ]}>
                        <View style={styles.durations}>
                            <View style={styles.rowTwo}>
                                <Text style={styles.small_title_two}>
                                    LOAN DETAILS
                                </Text>
                                <View style={[styles.rowThree, { paddingLeft: 10, paddingRight: 10 }]}>
                                    <View style={styles.fullColumn}>
                                        <View
                                            style={styles.dividerThree}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}/>
                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Status
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { color: Colors.purple }]}>
                                        Outstanding
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Contract ID
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            XTN184782462736637
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Principal Amount
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            N18,000.00
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Interest
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            N7,000.00
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Default Charge
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            ----
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Amount Due
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            N25,000.00
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Loan Duration
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                           7 Days
                                        </Text>
                                    </View>

                                    <View style={styles.columnFour}>
                                        <Text style={styles.bodyText}>
                                            Application Date
                                        </Text>
                                    </View>
                                    <View style={styles.columnFive}>
                                        <Text style={[styles.bodyTextTwo, { fontSize: 12 }]}>
                                            26/07/2021
                                        </Text>
                                    </View>


                                    <View style={{ marginTop: 40 }}/>
                                    <View style={{ width: '100%', backgroundColor: Colors.gray, borderRadius: 30 }}>
                                        <View style={[styles.rowFive]}>
                                                <View style={styles.columnSix}>
                                                    <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>
                                                        Loan Contract
                                                    </Text>
                                                </View>
                                                <View style={styles.columnSeven}>
                                                    <Icon
                                                        style={styles.iconOne}
                                                        name='chevron-right'
                                                        color={Colors.black} /> 
                                                </View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.row, { paddingRight: 20 }]}>
                        <View style={styles.columnEight}>

                        </View>
                        <View style={styles.columnNine}>
                            <View style={styles.couponsColumnTwo}>
                                <Text style={styles.coupons}>
                                    Coupons
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
                                    <SmallTransparentButton text_color={coupons_btn.text_color} font_color={coupons_btn.font_color} font_size={coupons_btn.font_size} icon={coupons_btn.icon} border_color={coupons_btn.border_color} text={coupons_btn.text}></SmallTransparentButton>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>

                    <View style={styles.loanPaymentContainer}>
                        <LoanPaymentInputField navigation={navigation}></LoanPaymentInputField>
                    </View>

                    <View style={{ marginTop: 50 }}/>

                </View>
            
            </ScrollView>
        </SafeAreaView>
    )

}


export default RepayLoanScreen;

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
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    rowFour: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 10,
    },
    rowFive: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      paddingTop: 5,
      paddingBottom: 5,
    },
    columnOne: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    columnTwo: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    details: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    notification: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#f8cffd',
        height: 55,
    },
    notificationText: {
        fontSize: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.purple,
    },
    icon: {

    },
    loanAmountContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    loanAmount: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 40,
        paddingTop: 0,
    },
    durations: {
        borderRadius: 30,
        borderColor: Colors.purple,
        borderWidth: 2,
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 10,
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
    },
    small_title_two: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.purple,
        paddingTop: 10,
        paddingLeft: 25,
    },
    dividerThree: {
        backgroundColor: 'transparent',
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    fullColumn: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    columnFour: {
        width: '50%',
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
    },
    columnFive: {
        width: '50%',
        paddingRight: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
    },
    columnSix: {
        width: '50%',
        paddingLeft: 15,
        paddingTop: 3,
        paddingBottom: 5,
        backgroundColor: 'transparent',
    },
    columnSeven: {
        width: '50%',
        paddingRight: 15,
        paddingTop: 3,
        paddingBottom: 5,
        backgroundColor: 'transparent',
    },
    bodyText: {
        fontSize: 14,
        alignContent: 'center',
        alignItems: 'center',
    },
    bodyTextTwo: {
        fontSize: 16,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    iconOne: {
        fontSize: 12,
        paddingTop: 2,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
    },
    columnEight: {
        width: '20%',
        backgroundColor: 'transparent',
    },
    columnNine: {
        width: '80%',
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    coupons: {
        fontSize: 14,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingRight: 10,
        marginTop: 5,
    },
    couponsColumn: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    couponsColumnTwo: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    loanPaymentContainer: {
        paddingLeft: 20,
        paddingRight: 20
    }
})
