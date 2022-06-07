import React from 'react';
import { Component, useEffect } from 'react';
import { Alert, AsyncStorage, Clipboard, Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Share, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import FilterButton from '../../components/buttons/FilterButton';
import NavigationButton from '../../components/buttons/NavigationButton';
import TransparentButton from '../../components/buttons/TransparentButton';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { Modal } from '../../components/modals/modal';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');
import { useState } from 'react';


const CurrencyDetailsScreen = ({ navigation }) => {
    const [percentagePrice, setPercentagePrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [icon, setIcon] = useState(<View></View>);
    const [highest, setHighest] = useState(0);
    const [lowest, setLowest] = useState(0);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);  
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const filter_button = {
      icon_name: 'signal'
    }
    const send = {
      button_name: 'Send'
    }
    const receive = {
      button_name: 'Receive'
    }
    const [coin, setCoin] = React.useState("");
    const [coinImage, setCoinImage] = React.useState(<View></View>);
    
    useEffect(() => {
     
      (async() => {
        await AsyncStorage.getItem("coin").then((getCoin) => {
          setCoin(getCoin);
          if(getCoin === "BTC"){
            setCoinImage(<Image style={styles.avatar} source={require(`../../assets/images/btc.jpg`)} />);
          }else if(getCoin === "ETH"){
            setCoinImage(<Image style={styles.avatar} source={require(`../../assets/images/eth.jpg`)} />);
          }else{
            setCoinImage(<Image style={styles.avatar} source={require(`../../assets/images/usdt.png`)} />);
          }
          var coinCase = getCoin.toLocaleLowerCase();
          AsyncStorage.getItem(`${coinCase}_address`).then((coinAddress) => {
            setAddress(coinAddress)
          })
          AsyncStorage.getItem(`${coinCase}_balance`).then((coinBalance) => {
            setBalance(coinBalance)
          })
          fetch(`https://api-eu1.tatum.io/v3/tatum/rate/${getCoin}?basePair=USD`, {
            headers: {
              "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f"
            },
            method: "GET"
          }).then(response => response.json())
          .then(async (data) => {
            var coinPrice = Math.round((parseFloat(data.value) + Number.EPSILON) * 100) / 100;
            setPrice(coinPrice)
            var btc_old_price = 0;
            await AsyncStorage.getItem(`${coinCase}_old_price`).then((old_price) => {
              if(old_price === null || old_price === undefined){
                btc_old_price = coinPrice
              }else if(old_price !== null || old_price !== undefined){
                btc_old_price = parseFloat(old_price);
              }
            })
            // alert(btc_old_price)
            setHighest(coinPrice);
            setLowest(btc_old_price);
            var percentage_change = btc_old_price - coinPrice;
            setPercentagePrice(Math.round((percentage_change + Number.EPSILON) * 100) / 100)
            if(price >= btc_old_price){
              setIcon(<Icon
                style={{fontSize: 15,
                padding: 0,
                color: "green",
                includeFontPadding: false}}
                name='caret-up'/>)
            }else if(price < btc_old_price){
              setIcon(<Icon
                style={{fontSize: 15,
                padding: 0,
                color: "red",
                includeFontPadding: false}}
                name='caret-down'/>)
            }
            AsyncStorage.setItem(`${coinCase}_old_price`, `${coinPrice}`);
          })
        } )
      })()
    }, []);
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
                        {coin}
                    </Text>
                    </View>
                    <View style={[styles.columnThree, { backgroundColor: 'transparent' }]}>
                        <View style={[styles.divider_container_two, { backgroundColor: 'transparent' }]}>  
                            <TouchableOpacity onPress={ () => {
                                console.log('filter')
                            }}>
                            <FilterButton icon_name={filter_button.icon_name} ></FilterButton>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>

                <View style={[styles.columnFour, { backgroundColor: Colors.white }]}>

                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center', alignSelf: 'center' }}>
                  </View>
                  <View style={{ width: '50%', backgroundColor: Colors.white, alignItems: 'center' }}>
                    <View style={styles.currency}>
                      <Text style={styles.currencyText}>
                        USD&nbsp;<Icon
                                  style={styles.iconOne}
                                  name='caret-down'
                                  color={Colors.white} />
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center' }}>
                  </View>

                </View>


                <View style={styles.row}>
                  <View style={styles.columnSeven}>
                        <Text style={styles.wallet}>
                          Wallet Balance
                        </Text>
                        <Text style={styles.balance}>
                          N 0.00
                        </Text>
                  </View>
                  <View style={styles.columnFive}>
                    <Text style={styles.coin}>
                      {balance} {coin}
                    </Text>
                  </View>

                  <View style={styles.columnSix}>
                    <View style={styles.divider}/>
                  </View>

                </View>

                <View style={styles.currencyRow}>
                  
                  <View style={styles.rowColumnOne}>
                    {
                      coinImage
                    }
                      
                  </View>
                  <View style={styles.rowColumnTwo}>
                    <Text style={styles.title}>
                      ${price}/{coin}
                    </Text>
                    <Text style={styles.title_two}>
                      {percentagePrice}
                    </Text>
                  </View>
                  <View style={styles.rowColumnThree}>
                    <TouchableOpacity onPress={() => navigation.navigate('BuyOrders', {
                      status: 'buy'
                    })}>
                      <View style={styles.small_btn}>
                        <Text style={styles.small_btn_text}>
                          Buy
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 3 }}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('SellOrders', {
                      status: 'sell'
                    })}>
                      <View style={styles.small_btn_two}>
                        <Text style={styles.small_btn_text}>
                          Sell
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>

                <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
                  <View style={styles.rowDuration}>
                    <View style={styles.durationContainerOne}>
                        <Text style={styles.textActive}>
                          Day
                        </Text>
                    </View>
                    <View style={styles.durationContainerTwo}>
                        <Text style={styles.textInactive}>
                          Week
                        </Text>
                    </View>
                    <View style={styles.durationContainerThree}>
                        <Text style={styles.textInactive}>
                          Month
                        </Text>
                    </View>
                    <View style={styles.durationContainerFour}>
                        <Text style={styles.textInactive}>
                          Year
                        </Text>
                    </View>
                    <View style={styles.durationContainerFive}>
                        <Text style={styles.textInactive}>
                          2 Years
                        </Text>
                    </View>
                  </View>
                </View>

                <View style={{ height: 250 }}>

                </View>

                <View style={styles.buttonRow}>

                  <View style={styles.buttonColumnOne}>
                    <TouchableOpacity onPress={() => navigation.navigate('Send')}>
                      <Button button_name={ send.button_name }></Button> 
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonColumnTwo}>
                      <TouchableOpacity onPress={ handleModal }>
                        <TransparentButton button_name={ receive.button_name }></TransparentButton>
                      </TouchableOpacity>
                  </View>

                </View>

                <View style={styles.pricingRow}>
                    
                    <View style={styles.pricingColumnOne}>
                      <View style={styles.priceContainer}>
                          <Text style={styles.priceHeadText}>
                            ${percentagePrice}
                          </Text>
                          <Text style={styles.priceBodyText}>
                            24h change
                          </Text>
                      </View>
                    </View>
                    <View style={styles.pricingColumnTwo}>
                      <View style={styles.priceContainer}>
                          <Text style={styles.priceHeadText}>
                            ${highest}
                          </Text>
                          <Text style={styles.priceBodyText}>
                            24h highest
                          </Text>
                      </View>
                    </View>
                    <View style={styles.pricingColumnThree}>
                      <View style={styles.priceContainer}>
                          <Text style={styles.priceHeadText}>
                            ${lowest}
                          </Text>
                          <Text style={styles.priceBodyText}>
                            24h lowest
                          </Text>
                      </View>
                    </View>

                </View>

                
                <Modal isVisible={isModalVisible}>
                    <Modal.Container>
                        <Modal.Header>

                          <View style={{ marginTop: 20 }}/>
                          <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>

                            <View style={[styles.rowThree, { backgroundColor: 'transparent' }]}>

                                <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
                                <View style={[styles.divider_container, { backgroundColor: 'transparent' }]}>  
                                    <TouchableOpacity onPress={ handleModal }>
                                    <NavigationButton icon_name={navigation_button.icon_name} ></NavigationButton>
                                    </TouchableOpacity>
                                </View>
                                </View>
                                <View style={[styles.columnTwo, { backgroundColor: 'transparent' }]}>
                                <Text style={[styles.details, { backgroundColor: 'transparent' }]}>
                                    Receive
                                </Text>
                                </View>
                                <View style={styles.columnThree}>

                                </View>
                                
                            </View>

                          </ImageBackground>

                        </Modal.Header>
                        <Modal.Body>
                            <View style={styles.cardContainer}>
                                <View style={[styles.card, { backgroundColor: Colors.white }, styles.shadowPropTwo]}>
                                    <View style={{marginTop: 10}}/>
                                    <Image style={styles.avatarTwo} source={require('../../assets/images/barcode.png')} />
                                    <View style={styles.rowTwo}>
                                        <View style={styles.columnFourTwo}>
                                            <Text style={styles.smallText}>
                                                Your {coin} Address
                                            </Text>
                                            <Text style={styles.smallTextBold}>
                                                {address}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowTwo}>
                                <View style={styles.columnFiveTwo}>
                                    
                                </View>
                                <View style={styles.columnSevenTwo}>
                                    <View>
                                        <View style={styles.buttonContainer}>
                                          <TouchableOpacity onPress={() => {
                                            Clipboard.setString(address);
                                            Alert.alert("Success", "Wallet address copied to clipboard");
                                          }}>
                                            <Icon
                                                style={styles.icon}
                                                name='copy'
                                                color={Colors.black} />
                                          </TouchableOpacity>
                                        </View>
                                        <Text style={styles.smallButton}>
                                            Copy
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.columnNine}>
                                </View>
                                <View style={styles.columnEight}>
                                    <View>
                                        <View style={styles.buttonContainerTwo}>
                                          <TouchableOpacity onPress={() => {
                                              Share.share({
                                                "message": address
                                              });
                                            }}>
                                            <Icon
                                                style={[styles.icon, { color: Colors.purple }]}
                                                name='external-link'
                                                color={Colors.purple} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.smallButton}>
                                            Share
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.columnSixTwo}>

                                </View>
                            </View>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal.Container>
                </Modal>


            </View>

        </ScrollView>
        </SafeAreaView>
    );
}

export default CurrencyDetailsScreen;

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
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    currencyRow: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    columnOne: {
      width: '25%',
      backgroundColor: 'transparent',
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
    columnSeven: {
      width: '50%',
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
    wallet: {
      fontSize: 12,
      paddingLeft: 20,
    },
    balance: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 20,
    },
    columnFive: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnSix: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    coin: {
      color: Colors.grey,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      paddingRight: 20,
      paddingTop: 10,
    },
    divider: { 
      paddingTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderBottomWidth: 2, 
      borderBottomColor: Colors.grey,
    },
    rowColumnOne: {
      alignItems: 'center',
      alignSelf: 'center',
      width: '20%',
    },
    rowColumnTwo: {
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      width: '45%',
    },
    rowColumnThree: {
      alignSelf: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      width: '35%',
    },
    avatar: {
      borderRadius: 30,
      height: 50,
      width: 50,
      resizeMode: 'contain'
    },
    title: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 18,
      paddingTop: 5,
    },
    title_two: {
      textAlign: 'left',
      color: Colors.green,
      fontSize: 11
    },
    small_btn: {
      borderRadius: 30,
      alignSelf: 'center',
      backgroundColor: Colors.blue,
    },
    small_btn_two: {
      borderRadius: 30,
      alignSelf: 'center',
      backgroundColor: Colors.purple,
    },
    small_btn_text: {
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      color: Colors.white,
    },
    buttonRow: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    buttonColumnOne: {
      width: '50%',
      backgroundColor: 'transparent',
      padding: 0,
      includeFontPadding: false
    },
    buttonColumnTwo: {
      width: '50%',
      padding: 0,
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    pricingRow: {
      paddingBottom: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    pricingColumnOne: {
      width: '33%',
      padding: 15,
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    pricingColumnTwo: {
      width: '33%',
      padding: 15,
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    pricingColumnThree: {
      width: '33%',
      padding: 15,
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    priceContainer: {
      borderRadius: 10,
      backgroundColor: Colors.gray,
    },
    priceHeadText: {
      color: Colors.blue,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
    },
    priceBodyText: {
      color: Colors.black,
      fontSize: 12,
      textAlign: 'center',
      paddingTop: 5,
      paddingBottom: 10,
    },
    rowDuration: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: Colors.grey,
      borderRadius: 30,
    },
    durationContainerOne: {
      width: '20%',
      borderRadius: 30,
      backgroundColor: Colors.purple,
    },
    durationContainerTwo: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    durationContainerThree: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    durationContainerFour: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    durationContainerFive: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    textActive: {
      fontSize: 12,
      color: Colors.white,
      padding: 10,
      textAlign: 'center'
    },
    textInactive: {
      fontSize: 12,
      color: Colors.black,
      padding: 10,
      textAlign: 'center'
    },
    shadowPropTwo: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 5
    },
    cardContainer: {
        padding: 20,
        backgroundColor: 'transparent',
    },
    card: {
        borderRadius: 30,
        backgroundColor: 'transparent',
    },
    smallText: {
        fontSize: 12,
        textAlign: 'center',
    },
    smallTextBold: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.purple,
        fontWeight: 'bold',
    },
    icon: {
      textAlign: 'center',
      fontSize: 25,
      color: Colors.white,
      padding: 20,
      includeFontPadding: false
    },
    buttonContainer: {
        borderRadius: 80,
        backgroundColor: Colors.purple,
    },
    buttonContainerTwo: {
        borderRadius: 80,
        backgroundColor: Colors.gray,
    },
    smallButton: {
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      backgroundColor: 'transparent',
    },
    columnEight: {
        width: '22%',
        backgroundColor: 'transparent',
    },
    columnNine: {
        width: '6%',
        backgroundColor: 'transparent',
    },
    columnFiveTwo: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    columnSixTwo: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    columnSevenTwo: {
        width: '22%',
        backgroundColor: 'transparent',
    },
    columnFourTwo: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    avatarTwo: {
      height: 200,
      width: 200,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
})