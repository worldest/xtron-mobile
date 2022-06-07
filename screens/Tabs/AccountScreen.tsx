import { StyleSheet, ScrollView, AsyncStorage, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { RootTabScreenProps } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import { SingleList } from '../../components/lists/SingleList';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

export default function AccountScreen({ navigation }: RootTabScreenProps<'Account'>) {
    const [fullname, setFullname] = useState("");
    const [data, setData] = useState({
        user: {
        wallet: 0,
        fullname: "",
        ID: "" ,
        phone: ""
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
  const menu = [
      {
          id: 1,
          icon: 'user',
          name: 'Personal Details',
          route: 'EditProfile'
      },
      {
          id: 2,
          icon: 'sellsy',
          name: 'Trades',
          route: 'Trades'
      },
      {
          id: 3,
          icon: 'credit-card',
          name: 'Payment Methods',
          route: 'PaymentMethods'
      },
      {
          id: 4,
          icon: 'level-up',
          name: 'Upgrade Account Limits',
          route: 'Upgrade'
      },
      {
          id: 5,
          icon: 'gear',
          name: 'Settings',
          route: 'Settings'
      },
      {
          id: 6,
          icon: 'support',
          name: 'Support',
          route: 'Support'
      },
  ]
  return (
    <View style={styles.container}>
            <View style={styles.header}>
            <SafeAreaView></SafeAreaView>
                <LinearGradient
                    colors={[Colors.purple, Colors.purple, Colors.blue]}
                    style={styles.background}
                />

                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        My Account
                    </Text>
                </View>
            </View>

            <ScrollView>  

                <View style={styles.avatarColumn}>
                    <View style={styles.avatar}>
                        {/* Avatar */}
                        <View style={styles.avatarContainer}>
                            <Image source={require('../../assets/images/avatar.png')} resizeMode="cover" style={styles.bg}/>
                            <Icon
                                style={styles.iconThree}
                                name='user-plus'/>
                        </View>
                    </View>
                    {/* Profile */}
                    <View style={styles.profileContainer}>
                        <Text style={styles.profileTitle}>
                            {data.user.fullname}
                        </Text>
                        <Text style={styles.profileTitleTwo}>
                            Account ID: XTR-{data.user.phone}-{data.user.ID}
                        </Text>
                    </View>

                </View>
                
                
                {
                    menu.map(entry =>
                    <View key={entry.id} style={[styles.list]}>
                        <TouchableOpacity onPress={() => navigation.navigate(`${entry.route}`)}>
                            <SingleList icon={entry.icon} name={entry.name}></SingleList>
                        </TouchableOpacity>
                    </View> 
                    )
                }

                <View style={{marginTop: 20}}/>

                <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem("userId").then(() => {
                        AsyncStorage.removeItem("biometric");
                        navigation.navigate('Login')
                    })
                }}>
                    <View style={[styles.title_container]}>
                        <View style={[styles.signOutContainer, styles.shadowPropButton]}>
                            <Text style={styles.signOutText}>
                                <Icon
                                    style={styles.iconOne}
                                    name='sign-out'/>&nbsp;Sign Out
                            </Text> 
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{marginTop: 100}}/>

            </ScrollView>  
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        includeFontPadding: false
    },
    header: {
        height: 120,
        includeFontPadding: false
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 120,
        includeFontPadding: false
    },
    title: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.white,
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
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.white,
    },
    signOutContainer: {
        backgroundColor: Colors.purple,
        borderRadius: 30,
        width: 150,
    },
    iconOne: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        color: Colors.white,
        includeFontPadding: false
    },
    signOutText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 16,
        padding: 10,
    },
    avatarColumn: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    avatar: {
      backgroundColor: 'transparent',
      width: '35%',
      paddingLeft: 20,
      includeFontPadding: false,
      padding: 20,
    },
    avatarContainer: {
        borderRadius: 50,
        height: 90,
        width: 90,
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: Colors.purple,
    },
    bg: {
        borderRadius: 50,
        marginTop: 20,
        height: 50,
        width: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
    profileTitle: {
        fontSize: 16,
        color: Colors.purple,
        fontWeight: 'bold',
    },
    profileTitleTwo: {
        fontSize: 16,
        color: Colors.purple,
    },
    profileContainer: {
        alignSelf: 'center',
        backgroundColor: 'transparent',
        width: '65%',
        paddingRight: 20,
        includeFontPadding: false,
    },
    iconThree: {
        fontSize: 20,
        paddingLeft: 60,
        textAlign: 'center',
        color: Colors.purple,
        includeFontPadding: false
    },
    shadowPropButton: {
      shadowColor: Colors.purple,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
})