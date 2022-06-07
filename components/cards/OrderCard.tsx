import { StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import AvatarWithName from '../avatars/AvatarWithName';
import { useState } from 'react';
import { useEffect } from 'react';

export const OrderCard = (props: any) => {
  const [balance, setBalance] = useState(0);
  const [coin, setCoin] = useState("");
  const [coinPrice, setCoinPrice] = useState(0);
  const [userMin, setUserMin] = useState(0);
  const [userMax, setUserMax] = useState(0);
  var data = props.data;
  const buy_order = {
    name: 'Johnny',
    text_color: Colors.purple,
  }
  const sell_order = {
    name: 'Johnny',
    text_color: Colors.blue,
  }
  useEffect(() => {
    AsyncStorage.getItem("coin").then((coin) => {
      var url;
      if(coin === "BTC"){
        url = `https://api-eu1.tatum.io/v3/bitcoin/address/balance/${data.wallet.address}`
      }else if(coin === "ETH"){
        url = `https://api-eu1.tatum.io/v3/ethereum/address/balance/${data.wallet.address}`
      }else{
        url = `https://api-eu1.tatum.io/v3/ethereum/address/balance/${data.wallet.address}`
      }
      fetch(`${url}`, {
        headers: {
          "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
          "Content-Type": "application/json" 
        },
        // body: JSON.stringify(data),
        method: "GET"
      }).then(response => response.json())
      .then((data) => {
        AsyncStorage.setItem(`${data.wallet.address}_balance`, data.incoming);  
        // //console.log(data);
        setBalance(data.incoming);    
      })
      .catch((error) => {
        //console.log(error);
      })

      fetch(`https://api-eu1.tatum.io/v3/tatum/rate/${coin}?basePair=NGN`, {
        headers: {
          "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f"
        },
        method: "GET"
      }).then(response => response.json())
      .then(async (datas) => {
        setCoinPrice(Math.round((Number(datas.value) + Number.EPSILON) * 100) / 100)
        var max = balance * Number(datas.value);
        var min = max - 50000;
        if(min < 0){
          min = 0
        }
        setUserMin(min);
        setUserMax(max);
        
        AsyncStorage.setItem(data.wallet.address, `${min}`);
        AsyncStorage.setItem(`${data.wallet.address}_max`, `${max}`);
      })
    })
    
  }, [])
  return (
      <View style={[styles.container, styles.shadowProp]}>

        <View style={styles.columnOne}>
            <View style={styles.avatarContainer}>
              {
                props.status == 'buy'
              ? <AvatarWithName text_color={buy_order.text_color} name={data.profile.fullname}></AvatarWithName>
              : <AvatarWithName text_color={sell_order.text_color} name={data.profile.fullname}></AvatarWithName>
              }
            </View>
            <Text style={styles.textContainer}>
                Price
                {'\n'} 
                <Text style={{ fontWeight: 'bold' }}>N</Text><Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>{Number(coinPrice).toLocaleString()}</Text>
            </Text>
            <Text style={styles.textContainer}>
                Quantity <Text style={{ fontWeight: 'bold', color: Colors.black }}>{balance}</Text>
            </Text>
            <Text style={styles.textContainerTwo}>
                Range: <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text><Text style={{ fontWeight: 'bold' }}>{userMin}</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>-</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text> <Text style={{ fontWeight: 'bold' }}>{userMax}</Text> 
            </Text>
        </View>
        <View style={styles.columnTwo}>
          {
          props.status == 'buy'
          ?  <TouchableOpacity style={{paddingTop: 20}}>
                <View style={styles.small_btn}>
                    <Text style={styles.small_btn_text}>
                        Buy
                    </Text>
                </View>
            </TouchableOpacity>
          : <TouchableOpacity style={{paddingTop: 20}}>
                <View style={styles.small_btn_two}>
                    <Text style={styles.small_btn_text}>
                      Sell
                    </Text>
                </View>
            </TouchableOpacity>
          }
            <Text style={styles.amount}>
              Bank Trf
            </Text>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderRadius: 30,
        backgroundColor: Colors.white,
        includeFontPadding: false
    },
    columnOne: {
      width: '75%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '25%',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: 'transparent',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    textContainer: {
        paddingLeft: 20,
    },
    avatarContainer: {
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    iconOne: {
      fontSize: 15,
    },
    textContainerTwo: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingBottom: 20,
      color: Colors.black,
    },
    rightTextContainer: {
      color: Colors.purple,
      fontWeight: 'bold',
      fontSize: 16,
      paddingTop: 20,
      paddingRight: 20,
    },
    rightTextContainerTwo: {
      color: Colors.black,
      paddingTop: 20,
      paddingRight: 20,
      fontSize: 12,
    },
    amount: {
      color: Colors.blue,
      fontSize: 11,
      textAlign: 'right',
      paddingTop: 75,
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
})