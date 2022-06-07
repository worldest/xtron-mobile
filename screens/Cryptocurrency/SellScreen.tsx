import React from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import FilterButton from '../../components/buttons/FilterButton';
import NavigationButton from '../../components/buttons/NavigationButton';
import TransparentButton from '../../components/buttons/TransparentButton';
import { OrderCard } from '../../components/cards/OrderCard';
import { TradeCard } from '../../components/cards/TradeCard';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { FloatingAction } from "react-native-floating-action";
const { width, height } = Dimensions.get('window');

const SellScreen = ({ navigation, route }) => {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const amount = {
      currency: 'N',
      placeholder: 'Enter Amount',
      font_size: 20
    }
    const range_one = {
      currency: 'N',
      placeholder: 'Enter Amount',
      font_size: 20,
      padding_left: 20,
      padding_right: 10,
    }
    const range_two = {
      currency: 'N',
      placeholder: 'Enter Amount',
      font_size: 20,
      padding_left: 10,
      padding_right: 20,
    }
    const continue_btn = {
      button_name: 'Continue',
      button_bg_color: Colors.purple
    }
    return (
            <View style={styles.container}>

            <ScrollView>
            <SafeAreaView></SafeAreaView>

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
                        Sell Order
                    </Text>
                    </View>
                    <View style={styles.columnThree}>
                        <View style={styles.divider_container_two}>  
      
                        </View>
                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 10 }}/>

                <View style={[styles.columnFour, { backgroundColor: Colors.white }]}>

                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center', alignSelf: 'center' }}>
                  </View>
                  <View style={{ width: '50%', backgroundColor: Colors.white, alignItems: 'center' }}>
                    <View style={styles.currency}>
                      <Text style={styles.currencyText}>
                        NGN&nbsp;<Icon
                                  style={styles.iconOne}
                                  name='caret-down'
                                  color={Colors.white} />
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center' }}>
                  </View>

                </View>
                
                <View style={{ paddingTop: 10 }}/>

                <View style={styles.cardContainer}>

                    <View style={[styles.card, { backgroundColor: Colors.white }, styles.shadowProp]}>

                        <View style={{ paddingTop: 30, backgroundColor: 'transparent',}}/>
                        <View style={styles.rowTwo}>
                            <View style={styles.columnSix}>
                                <Text style={styles.amountText}>
                                    Amount
                                </Text>
                                <InputWithIconField font_size={amount.font_size} placeholder={amount.placeholder} currency={amount.currency}></InputWithIconField>
                            </View>
                            <View style={styles.columnSeven}>
                                <Text style={styles.amountText}>
                                   Range
                                </Text>
                                <InputWithIconField padding_right={range_one.padding_right} padding_left={range_one.padding_left} font_size={range_one.font_size} placeholder={range_one.placeholder} currency={range_one.currency}></InputWithIconField>
                            </View>
                            <View style={styles.columnEight}>
                                <Text style={styles.amountText}>
                                   
                                </Text>
                                <InputWithIconField padding_right={range_two.padding_right} padding_left={range_two.padding_left} font_size={range_two.font_size} placeholder={range_two.placeholder} currency={range_two.currency}></InputWithIconField>
                            </View>
                        </View>
                        <View style={styles.rowTwo}>
                            <View style={styles.columnSix}>
                                <Text style={styles.textContainer}>
                                    Price
                                    {'\n'} 
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.black }}>N</Text><Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>24,180,000.00</Text>
                                </Text>
                                <Text style={styles.textContainerTwo}>
                                    Quantity <Text style={{ fontWeight: 'bold' }}>0.000346672626 BTC</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={{ paddingTop: 30, backgroundColor: 'transparent', }}/>
                    </View>

                </View>

                <View style={{ paddingLeft: 40, paddingTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Payment Method
                    </Text>
                </View>
                <View style={{padding: 20}}>
                  <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods')}>
                    <View style={styles.paymentContainer}>
                      <View style={styles.rowTwo}>
                        <View style={styles.columnSeven}>
                          <Text style={styles.paymentText}>
                            Bank Transfer
                          </Text>
                        </View>
                        <View style={styles.columnEight}>
                          <Icon
                            style={styles.icon}
                            name='chevron-down'
                            color={Colors.purple} />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

          
                <View style={{marginTop: 100}}/>

                <TouchableOpacity onPress={ () => {
                        navigation.navigate('Wallet') 
                      }}>
                  <Button button_bg_color={ continue_btn.button_bg_color } button_name={ continue_btn.button_name }></Button>
                </TouchableOpacity>

                <View style={{marginTop: 30}}/>

            </ScrollView>
            </View>
    )
}

export default SellScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false
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
      width: '25%',
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
    divider_container_two: {
      alignSelf: 'flex-end',
      padding: 15,
      includeFontPadding: false
    },
    columnTwo: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '25%',
      backgroundColor: 'transparent',
    },
    columnFour: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    currency: {
      borderRadius: 30,
      backgroundColor: Colors.purple,
    },
    currencyText: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
    iconOne: {
      fontSize: 15,
      padding: 0,
      color: Colors.white,
      includeFontPadding: false
    },
    cardContainer: {
        padding: 20,
        backgroundColor: 'transparent',
    },
    card: {
        borderRadius: 30,
        backgroundColor: 'transparent',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    columnSix: {
      width: '100%',
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    amountText: {
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingBottom: 5,
        backgroundColor: 'transparent',
    },
    columnSeven: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnEight: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    textContainer: {
        fontSize: 12,
        paddingRight: 20,
        textAlign: 'right',
        backgroundColor: 'transparent',
    },
    textContainerTwo: {
      paddingRight: 20,
      color: Colors.black,
      textAlign: 'right',
      fontSize: 9,
      backgroundColor: 'transparent',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 30,  
      elevation: 5
    },
    paymentContainer: {
      width: '100%',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: Colors.purple,
      backgroundColor: 'transparent',
    },
    paymentText: {
      fontSize: 16,
      padding: 20,
      fontWeight: 'bold',
      color: Colors.purple,
    },
    icon: {
      fontSize: 20,
      padding: 20,
      textAlign: 'right',
    },
})
