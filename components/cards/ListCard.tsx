import { StyleSheet, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
const mnemonicWords = require('mnemonic-words');
 
function getRandomValues(arr, count){
  var result = [];
  var _tmp = arr.slice();
  for(var i = 0; i<count; i++){
    var index = Math.ceil(Math.random() * 10) % _tmp.length;
    result.push(_tmp.splice(index, 1)[0]);
  }
  return result;
}

var phrase = getRandomValues(mnemonicWords, 12);
var phrases_ = phrase.toString();
var phrases = phrases_.replace(/,/g, ' ');
export const ListCard = ({ }) => {
  const [percentagePrice, setPercentagePrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [icon, setIcon] = useState(<View></View>);

  useEffect(() => {
    AsyncStorage.getItem("userId").then((user) => {
      if(user !== null && user !== undefined){
        fetch(`http://146.190.27.11/User/getUser.php?id=${user}`, {
          method: "GET"
        })
        .then(response => response.json())
        .then((datas) => {
          if(datas.code == 200){
            if(datas.btc.pub_address === null){
              //btc address empty
              //connect to blockchain and generate address
              fetch(`https://api-eu1.tatum.io/v3/bitcoin/wallet?mnemonic=`, {
                headers: {
                  "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                  "Content-Type": "application/json"
                },
                // body: JSON.stringify(data),
                method: "GET"
              }).then(response => response.json())
              .then((data) => { 
                var xpub = data.xpub;
                //console.log(data)
                var mnemonic = data.mnemonic;
                fetch(`https://api-eu1.tatum.io/v3/bitcoin/address/${data.xpub}/0`, {
                  headers: {
                    "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                    "Content-Type": "application/json"
                  },
                  method: "GET"
                }).then(response => response.json())
                .then((data) => {
                  var address = data.address;
                  
                  fetch(`https://api-eu1.tatum.io/v3/bitcoin/wallet/priv`, {
                    headers: {
                      "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                      "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                      index: 0,
                      mnemonic: phrases
                    })
                  })
                  .then(response => response.json())
                  .then((data) => {
                    var priv_key = data.key        
                    //console.log(data);
                   
                    fetch(`http://146.190.27.11/User/setBTC.php?id=${user}&address=${address}&priv_key=${priv_key}&pub_address=${xpub}&phrase=${mnemonic}`, {
                      method: "GET"
                    }).then(response => response.json())
                    .then((data) => {
                      //console.log(data)
                      AsyncStorage.setItem("btc_address", `${address}`);   
                      AsyncStorage.setItem("btc_private_key", `${priv_key}`);   
                      AsyncStorage.setItem("btc_phrases", `${mnemonic}`);        
                    })
                    fetch(`https://api-eu1.tatum.io/v3/bitcoin/address/balance/${address}`, {
                      headers: {
                        "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                        "Content-Type": "application/json"
                      },
                      // body: JSON.stringify(data),
                      method: "GET"
                    }).then(response => response.json())
                    .then((data) => {
                      AsyncStorage.setItem("btc_balance", data.incoming);  
                      //console.log(data);        
                    })
                    .catch((error) => {
                      //console.log(error);
                    })
                  }) 
                  
                })  
                
                
              })
            }else{
              //btc address not null      
              AsyncStorage.setItem("btc_address", `${datas.btc.address}`);   
              AsyncStorage.setItem("btc_private_key", `${datas.btc.priv_key}`);   
              AsyncStorage.setItem("btc_phrases", `${datas.btc.phrase}`);        
              fetch(`https://api-eu1.tatum.io/v3/bitcoin/address/balance/${datas.address}`, {
                headers: {
                  "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f",
                  "Content-Type": "application/json"
                },
                // body: JSON.stringify(data),
                method: "GET"
              }).then(response => response.json())
              .then((data) => {
                AsyncStorage.setItem("btc_balance", data.incoming);  
                // //console.log(data);        
              })
              .catch((error) => {
                //console.log(error);
              })
            }
          }else{
            Alert.alert("Exception", datas.message);       
          }
        })
      }
    })   
    fetch("https://api-eu1.tatum.io/v3/tatum/rate/BTC?basePair=USD", {
      headers: {
        "X-Api-Key": "53538172-5bc7-433c-83fd-d6b2e0e1233f"
      },
      method: "GET"
    }).then(response => response.json())
    .then(async (data) => {
      var coinPrice = Math.round((parseFloat(data.value) + Number.EPSILON) * 100) / 100;
      setPrice(coinPrice)
      var btc_old_price = 0;
      await AsyncStorage.getItem("btc_old_price").then((old_price) => {
        if(old_price === null || old_price === undefined){
          btc_old_price = 1
        }else if(old_price !== null || old_price !== undefined){
          btc_old_price = parseFloat(old_price);
        }
      })
      
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
      AsyncStorage.setItem("btc_old_price", `${coinPrice}`);
    })
  }, []);
  return (
    <View style={[styles.container, styles.shadowProp]}>

      <View style={styles.columnOne}>
          <Image style={styles.avatar} source={require('../../assets/images/btc.jpg')} />
      </View>
      <View style={styles.columnTwo}>
          <Text style={styles.title}>
            BTC
          </Text>
      </View>
      <View style={styles.columnThree}>
        
      </View>
      <View style={styles.columnFour}>
          <Text style={styles.smallTextTop}>
           {percentagePrice}&nbsp;{icon}
          </Text>
          <Text style={styles.smallTextBottom}>
           ${price}
          </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  columnOne: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: '20%',
  },
  columnTwo: {
    alignSelf: 'center',
    width: '15%',
  },
  columnThree: {
    width: '40%',
  },
  columnFour: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: '25%',
  },
  title: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  avatar: {
    borderRadius: 30,
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  iconOne: {
    fontSize: 15,
    padding: 0,
    color: Colors.green,
    includeFontPadding: false
  },
  smallTextTop: {
    fontSize: 12,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
    color: Colors.green,
  },
  smallTextBottom: {
    textAlign: 'right',
    paddingTop: 5,
    paddingBottom: 20,
    paddingRight: 20,
    color: Colors.black,
    fontSize: 12
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 10
  },
});