import { StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import EditScreenInfo from '../../components/EditScreenInfo';
import { ListCard } from '../../components/cards/ListCard';
import { ListCard_ETH } from '../../components/cards/ListCard_ETH';
import { ListCard_USDT } from '../../components/cards/ListCard_USDT';
import  InputField from '../../components/inputs/InputField';
import Colors from '../../constants/Colors';
import AvatarWithName from '../../components/avatars/AvatarWithName';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardsCarousel from '../../components/carousel/CardsCarousel';
import { CardsScrolling } from '../../components/carousel/CardsScrolling';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useEffect } from 'react';

export default  function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [fullname, setFullname] = useState("");
  const [data, setData] = useState({
    user: {
      wallet: 0
    }
  });
  useEffect(() => {
    AsyncStorage.getItem("userId").then((user) => {
      if(user !== null && user !== undefined){
        fetch(`http://146.190.27.11/User/getUser.php?id=${user}`, {
          method: "GET"
        })
        .then(response => response.json())
        .then((datas) => {
          console.log(datas)
          setFullname(datas.user.fullname);
          setData(datas);
        })
        .catch((error) => {
  
        })
      }
    })
  }, [])
  
  const user = {
    name: 'Hi, Bright'
  }

  return (
    <View style={styles.container}>

      <SafeAreaView></SafeAreaView>

      <View style={styles.columnOne}>
        <View style={styles.avatar}>
          <AvatarWithName name={fullname}></AvatarWithName>
        </View>
        <View style={styles.notification}>
          <Icon
            style={styles.icon}
            name='bell'
            color={Colors.purple} />
        </View>
      </View>

      <View style={[styles.carousel]}>
        <CardsScrolling data={data} navigation={navigation}></CardsScrolling>
      </View>

      <View style={[styles.xtronFooter, styles.shadowPropMin]}>
        <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.avatarTwo}/>
      </View>
      
    <ScrollView>  

    <View style={[styles.columnTwo, { backgroundColor: Colors.white }]}>

      <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center', alignSelf: 'center' }}>
        <Text style={styles.pairs}>
          Pairs
        </Text>
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
        <Text style={styles.pairs}>
          24h Chng/
          {'\n'}Last Price
        </Text>
      </View>

    </View>


    <View style={styles.columnThree}>
        <TouchableOpacity onPress={() => 
          {
            AsyncStorage.setItem("coin", "BTC").then(() => {
              navigation.navigate('CurrencyDetails')
            })            
          }
        }>
          <ListCard></ListCard>
        </TouchableOpacity>
    </View>

    <View style={styles.columnThree}>
        <TouchableOpacity onPress={() => 
        
          {
            AsyncStorage.setItem("coin", "ETH").then(() => {
              navigation.navigate('CurrencyDetails')
            })            
          
        }
        }>
          <ListCard_ETH></ListCard_ETH>
        </TouchableOpacity>
    </View>

    <View style={styles.columnThree}>
        <TouchableOpacity onPress={() => 
          {
            AsyncStorage.setItem("coin", "USDT").then(() => {
              navigation.navigate('CurrencyDetails')
            })            
          }
        }>
          <ListCard_USDT></ListCard_USDT>
        </TouchableOpacity>
    </View>

    <View style={{marginTop: 70}}/>

    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    columnOne: {
      paddingTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    avatarTwo: {
      height: 50,
      width: '100%',
      resizeMode: 'contain',
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    avatar: {
      width: '50%',
      paddingLeft: 20,
      includeFontPadding: false,
    },
    notification: {
      alignItems: 'flex-end',
      width: '50%',
      paddingRight: 20,
      includeFontPadding: false,
    },
    icon: {
      fontSize: 30,
      paddingTop: 5,
      includeFontPadding: false
    },
    carousel: {
      flexDirection: 'row',
    },
    xtronFooter: {
      height: 50,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    columnTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      padding: 20,
      backgroundColor: Colors.grey,
    },
    pairs: {
        fontSize: 12,
        color: Colors.black,
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
    columnThree: {
      backgroundColor: 'transparent',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingTop: 5,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    shadowPropMin: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,  
      elevation: 5,
      borderTopColor: 'transparent',
    },
    
});
  