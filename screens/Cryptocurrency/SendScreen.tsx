import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, ImageBackground, AsyncStorage, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const SendScreen = ({ navigation }) => {
  const [coin, setCoinc] = useState('Please Wait');
  const [percentagePrice, setPercentagePrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [icon, setIcon] = useState(<View></View>);
    const [highest, setHighest] = useState(0);
    const [lowest, setLowest] = useState(0);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [receiveAddress, setReceiveAddress] = useState("");
    const [sendValue, setSendValue] = useState(0);
    const [privKey, setPrivKey] = useState("");
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const wallet_address = {
      icon_name: 'barcode',
      placeholder: `${coin} Wallet Address`,
      font_size: 25
    }
    const amount = {
      currency: `${coin}`, 
      placeholder: `Enter Amount in ${coin}`,
      font_size: 25
    }
    useEffect(() => {
      AsyncStorage.getItem("coin").then((getCoin) => {
        setCoinc(getCoin);
        var coinCase = getCoin.toLocaleLowerCase();
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
            AsyncStorage.getItem(`${coinCase}_address`).then((coinAddress) => {
              setAddress(coinAddress)
            })
            AsyncStorage.getItem(`${coinCase}_private_key`).then((privKey) => {
              setPrivKey(privKey)
            })
            AsyncStorage.getItem(`${coinCase}_balance`).then((coinBalance) => {
              setBalance(coinBalance)
            })
            var percentage_change = btc_old_price - coinPrice;
            setPercentagePrice(Math.round((percentage_change + Number.EPSILON) * 100) / 100)
            
            AsyncStorage.setItem(`${coinCase}_old_price`, `${coinPrice}`);
          })
      })
    }, [])
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
                        Send
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

            </ImageBackground>

            <View style={{ marginTop: 20 }}/>

                <View style={styles.row}>
                  <View style={styles.columnFour}>
                        <Text style={styles.wallet}>
                          sWallet Balance
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
                  <View style={styles.columnSix}>
                    <InputField onChangeText={(receiver) =>{
                        setReceiveAddress(receiver)
                      }} font_size={wallet_address.font_size} placeholder={wallet_address.placeholder} icon_name={wallet_address.icon_name}></InputField>
                  </View>
                  <View style={styles.columnSix}>
                    <InputWithIconField keyboardType="numeric" onChangeText={(value) =>{
                        console.log(value)
                        setSendValue(value)
                      }} font_size={amount.font_size} keyBoard placeholder={amount.placeholder} currency={amount.currency}></InputWithIconField>
                  </View>
                </View>

                <View style={{marginTop: 250}}/>

                <TouchableOpacity onPress={() => {
                   var txnLink;
                   var sendPayload;
                   var headers;
                  if(coin === "BTC"){
                    txnLink = `https://api-eu1.tatum.io/v3/bitcoin/transaction`;
                    sendPayload = {
                      fromAddress: [
                        {
                          address: address,
                          privateKey: `${privKey}`
                        }
                      ],
                      to: [
                        {
                          address: receiveAddress,
                          value: 0.2
                        }
                      ]
                     }
                     headers = {
                      "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                      "Content-Type": "application/json"
                    }
                  }else if(coin === "ETH"){

                    txnLink = `https://api-eu1.tatum.io/v3/ethereum/transaction`;
                    sendPayload = {
                      data: 'Ethereum TXN',
                      nonce: 0,
                      to: address,
                      currency: 'ETH',
                      fee: {
                        gasLimit: '40000',
                        gasPrice: '20'
                      },
                      amount: `${sendValue}`,
                      fromPrivateKey: privKey
                    }
                    headers = {
                      "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                      "Content-Type": "application/json",
                      'x-testnet-type': 'ethereum-ropsten',
                    }
                  }else if(coin === "USDT"){

                    txnLink = `https://api-eu1.tatum.io/v3/ethereum/transaction`;
                    sendPayload = {
                      data: 'Ethereum(USDT) TXN',
                      nonce: 0,
                      to: address,
                      currency: 'USDT',
                      fee: {
                        gasLimit: '40000',
                        gasPrice: '20'
                      },
                      amount: `${sendValue}`,
                      fromPrivateKey: privKey
                    }
                    headers = {
                      "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                      "Content-Type": "application/json",
                      'x-testnet-type': 'ethereum-ropsten',
                    }
                  }
                  console.log(sendPayload)
                  fetch(txnLink, {
                    headers: headers,
                    body: JSON.stringify(sendPayload),
                    method: "POST"
                  }).then(response => response.json())
                  .then((data) => {
                    console.log(data);
                    if(data.statusCode == 400){
                      Alert.alert(`${data.errorCode}`, data.data[0])
                    }else if(data.statusCode == 403){
                      Alert.alert(`${data.errorCode}`, data.message)
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  })
                }}>
                    <Button button_name={'Continue'}></Button>
                </TouchableOpacity>

                <View style={{marginTop: 30}}/>

            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default SendScreen;

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
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnFive: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnSix: {
      width: '100%',
      paddingTop: 10,
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
    wallet: {
      fontSize: 12,
      paddingLeft: 20,
    },
    balance: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 20,
    },
    coin: {
      color: Colors.grey,
      fontSize: 25,
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
    }
})