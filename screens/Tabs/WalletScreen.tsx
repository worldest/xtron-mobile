import { StyleSheet, Image, AsyncStorage, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { RootTabScreenProps } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListBuySellCard } from '../../components/cards/ListBuySellCard';
import React from 'react';
import { ListCard } from '../../components/cards/ListCard';
import { ListCard_ETH } from '../../components/cards/ListCard_ETH';
import { ListCard_USDT } from '../../components/cards/ListCard_USDT';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal } from "../../components/modals/modal";
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import { useState, useEffect } from 'react';

export default function WalletScreen({ navigation }: RootTabScreenProps<'Wallet'>) {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const [fullname, setFullname] = useState("");
    const [data, setData] = useState({
        user: {
        wallet: 0
        }
    });
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);  
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
    return (
    <View style={styles.container}>

        <View style={[styles.header, styles.shadowProp]}>    
        <SafeAreaView></SafeAreaView>
                <LinearGradient
                    colors={[Colors.purple, Colors.purple, Colors.blue]}
                    style={styles.background}
                />

                <View style={styles.columnOne}>
                    <View style={styles.textColumn}>
                        <Text style={styles.bold_title}>
                           Wallet
                        </Text>
                    </View>
                    <View style={styles.iconColumn}>
                        <Icon
                            style={styles.iconOne}
                            name='bell'
                            color={Colors.purple} />
                    </View>
                </View>
                
                <View style={styles.columnOne}>
                    <View style={styles.textColumn}>
                        <Text style={styles.small_title}>
                            Balance
                        </Text>
                        <Text style={styles.amount}>
                            N {data.user.wallet}&nbsp;<Icon style={styles.iconTwo} name='eye-slash' />
                        </Text>
                    </View>
                    <View style={styles.iconColumn}>
                        <View style={styles.currency}>
                            <Text style={styles.currencyText}>
                                USD&nbsp;<Icon
                                        style={styles.iconThree}
                                        name='caret-down'
                                        color={Colors.white} />
                            </Text>
                        </View>
                    </View>
                </View>

                {/* <View style={styles.columnOne}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('Send')}>
                            <View style={styles.icon_button}>
                                <Icon
                                    style={styles.iconFour}
                                    name='level-up'
                                    color={Colors.white} />
                            </View>
                            <Text style={styles.icon_text}>
                                Send
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}></View>
                    <View style={styles.button}>
                        <TouchableOpacity  onPress={handleModal}>
                            <View style={styles.icon_button}>
                                <Icon
                                    style={styles.iconFour}
                                    name='level-down'
                                    color={Colors.white} />
                            </View>
                            <Text style={styles.icon_text}>
                                Receive
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

        </View>

      
        <ScrollView style={{ paddingVertical: 20, backgroundColor: 'transparent' }}>  

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
                                <Image style={styles.avatar} source={require('../../assets/images/barcode.png')} />
                                <View style={styles.rowTwo}>
                                    <View style={styles.columnFour}>
                                        <Text style={styles.smallText}>
                                            Your BTC Address
                                        </Text>
                                        <Text style={styles.smallTextBold}>
                                            12MajhGFShgsaAGHhSy15667
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.rowTwo}>
                            <View style={styles.columnFive}>
                                
                            </View>
                            <View style={styles.columnSeven}>
                                <View>
                                    <View style={styles.buttonContainer}>
                                        <Icon
                                            style={styles.icon}
                                            name='copy'
                                            color={Colors.black} />
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
                                        <Icon
                                            style={[styles.icon, { color: Colors.purple }]}
                                            name='external-link'
                                            color={Colors.purple} />
                                    </View>
                                    <Text style={styles.smallButton}>
                                        Share
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.columnSix}>

                            </View>
                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal.Container>
            </Modal>

            <View style={{marginTop: 100}}/>

        </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        includeFontPadding: false
    },
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    avatar: {
      height: 200,
      width: 200,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    details: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    columnTwo: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    columnFour: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    columnFive: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    columnSix: {
        width: '25%',
        backgroundColor: 'transparent',
    },
    columnSeven: {
        width: '22%',
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
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      backgroundColor: 'transparent',
    },
    text: {
      fontSize: 16,
      fontWeight: "400",
      textAlign: "center",
    },
    header: {
        height: 260,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 30,
        includeFontPadding: false
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 260,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 30,
        includeFontPadding: false
    },
    columnOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        includeFontPadding: false
    },
    textColumn: {
        width: '50%',
        alignSelf: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
    },
    bold_title: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        includeFontPadding: false
    },
    iconColumn: {
        alignSelf: 'center',
        alignItems: 'flex-end',
        width: '50%',
        backgroundColor: 'transparent',
        includeFontPadding: false,
        paddingRight: 20,
    },
    iconOne: {
      fontSize: 30,
      color: Colors.white,
      includeFontPadding: false,
    },
    small_title: {
        fontSize: 12,
        color: Colors.white,
        paddingLeft: 20,
        paddingBottom: 5,
        includeFontPadding: false
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 40,
        color: Colors.white,
        paddingLeft: 20,
        includeFontPadding: false
    },
    iconTwo: {
      fontSize: 20,
      color: Colors.white,
      includeFontPadding: false
    },
    currency: {
      borderRadius: 30,
      backgroundColor: '#b166af',
    },
    currencyText: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 12,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
    iconThree: {
      fontSize: 15,
      padding: 0,
      color: Colors.white,
      includeFontPadding: false
    },
    icon_button: {
        borderWidth: 3,
        borderColor: Colors.white,
        borderRadius: 10,
        width: 40,
        backgroundColor: 'transparent',
    },
    iconFour: {
      fontSize: 25,
      textAlign: 'center',
      padding: 5,
      color: Colors.white,
      includeFontPadding: false
    },
    button: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        paddingTop: 20,
    },
    icon_text: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 5,
        color: Colors.white,
    },
    columnThree: {
      backgroundColor: 'transparent',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingTop: 5,
      paddingBottom: 10,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
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
    bg: {
        
    }
})