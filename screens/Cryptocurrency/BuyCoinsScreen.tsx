import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AsyncStorage, Alert, Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import AvatarWithName from '../../components/avatars/AvatarWithName';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const BuyCoinsScreen = ({ navigation }) => {
  const [trader, setTrader] = useState({
    profile: {
      fullname: ""
    },
    wallet: {
      address: ""
    }
  });
  const [coin, setCoin] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinBalance, setCoinBalance] = useState(0);
  const [coinValue, setCoinValue] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [buyValue, setBuyValue] = useState(0);
  AsyncStorage.getItem(`${trader.wallet.address}`).then((getMin) => {
    setMin(getMin);
  })
  AsyncStorage.getItem(`${trader.wallet.address}_max`).then((getMax) => {
    setMax(getMax);
  })
  
  useEffect(() => {
    AsyncStorage.getItem("trader").then((getTrader) => {
      setTrader(JSON.parse(getTrader));
    })
    AsyncStorage.getItem("coin").then((getCoin) => {
      setCoin(getCoin);
      fetch(`https://api-eu1.tatum.io/v3/tatum/rate/${getCoin}?basePair=NGN`, {
        headers: {
          "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f"
        },
        method: "GET"
      }).then(response => response.json())
      .then(async (datas) => {
        console.log(datas)
        setCoinPrice(Math.round((Number(datas.value) + Number.EPSILON) * 100) / 100)
      })
    })
    
  }, [])
    const user = {
      name: 'Johnny',
      text_color: Colors.purple,
      icon_name: 'chevron-right'
    }
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const amount = {
      currency: 'N',
      placeholder: 'Enter Amount',
      font_size: 25
    }
    const continue_btn = {
      button_name: 'Continue',
      button_bg_color: Colors.blue
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
                        Buy {coin}
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>

                <View style={styles.row}>
                  <View style={styles.columnFour}>
                    <AvatarWithName icon_name={user.icon_name} text_color={user.text_color} name={trader.profile.fullname}></AvatarWithName>
                  </View>
                  <View style={styles.columnFive}>
                    <Text style={styles.textContainer}>
                        Price
                        {'\n'} 
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.purple }}>N</Text><Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.purple }}>{coinPrice}</Text>
                    </Text>
                    <Text style={styles.textContainerTwo}>
                        Range: <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text><Text style={{ fontWeight: 'bold' }}>{min}</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>-</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text> <Text style={{ fontWeight: 'bold' }}>{max}</Text> 
                    </Text>
                  </View>
                </View>

                <View style={styles.rowTwo}>
                  <View style={styles.columnSix}>
                    <InputWithIconField onChangeText={(text) => {
                      setBuyAmount(text)
                      var rate = parseFloat(text) / parseFloat(coinPrice);
                      setBuyValue(Math.round((parseFloat(rate) + Number.EPSILON) * 1000000) / 1000000)
                    }} font_size={amount.font_size} placeholder={amount.placeholder} currency={amount.currency}></InputWithIconField>
                  </View>
                </View>

                <View style={{ paddingTop: 10 }}/>

                <View style={styles.rowTwo}>
                  <View style={styles.columnFour}>
                    <Text style={styles.amountOne}>
                      {buyAmount} NGN
                    </Text>
                  </View>
                 <View style={styles.columnFive}>
                    <Text style={styles.amountTwo}>
                    {buyValue} {coin}
                    </Text>
                  </View>
                </View> 


          
                <View style={{marginTop: 100}}/>

                <TouchableOpacity onPress={ () => {
                        // navigation.navigate('Wallet') 
                        ToastAndroid.show("Please wait", ToastAndroid.LONG);
                        
                        if(parseFloat(buyAmount) < parseFloat(min) || parseFloat(buyAmount) > parseFloat(max) ){
                          Alert.alert("Error", "Amount is greater maximum that vendor can sell or amount is less that minimum that vendor can sell")
                        }else if(parseFloat(buyAmount) >= parseFloat(min) && parseFloat(buyAmount) <= parseFloat(max)){
                          
                        }
                      }}>
                  <Button button_bg_color={ continue_btn.button_bg_color } button_name={ continue_btn.button_name }></Button>
                </TouchableOpacity>

                <View style={{marginTop: 30}}/>

            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default BuyCoinsScreen;

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
      paddingBottom: 10,
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    rowTwo: {
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
    columnFour: {
      paddingLeft: 20,
      width: '40%',
      backgroundColor: 'transparent',
    },
    columnFive: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    textContainer: {
        paddingRight: 20,
        textAlign: 'right',
    },
    textContainerTwo: {
      paddingRight: 20,
      color: Colors.black,
      textAlign: 'right',
      fontSize: 9,
    },
    columnSix: {
      width: '100%',
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    amountOne: {
      fontWeight: 'bold',
      fontSize: 15,
      color: Colors.black,
      textAlign: 'left',
    },
    amountTwo: {
      paddingRight: 20,
      fontSize: 15,
      color: Colors.purple,
      fontWeight: 'bold',
      textAlign: 'right',
    },
})