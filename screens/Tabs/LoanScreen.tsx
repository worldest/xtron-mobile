import { StyleSheet, Dimensions, AsyncStorage, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { RootTabScreenProps } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarWithName from '../../components/avatars/AvatarWithName';
import SmallButton from '../../components/buttons/SmallButton';
import { LoanListCard } from '../../components/cards/LoanListCard';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width: windowWidth} = Dimensions.get('window');


const request_loan = {
    icon: 'check-circle',
    text: 'Request Loan',
    bg_color: '#b166af'
}
const repay_loan = {
    text: 'Repay Loan  ',
    bg_color: '#b166af'
}
const user = {
    name: 'Hi, Bright',
    bg_color: 'transparent'
}

function loanAction(navigation: any, params: any) {
    return (
        <View style={{ backgroundColor: 'transparent' }}>
            {
                !params
            ?   <TouchableOpacity onPress={() => navigation.navigate('RequestLoan')}>
                    <SmallButton icon={request_loan.icon} bg_color={request_loan.bg_color} text={request_loan.text}></SmallButton>
                </TouchableOpacity>
            :   <TouchableOpacity onPress={() => navigation.navigate('RepayLoan')}>
                    <SmallButton bg_color={repay_loan.bg_color} text={repay_loan.text}></SmallButton>
                </TouchableOpacity>
            }
        </View>
    )
}

function loanInformation(params: any) {
    return (
        <View style={{ backgroundColor: 'transparent' }}>
        {
            !params
        ? <View style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.limit}>
                Available Limit
            </Text>
            <Text style={styles.amount}>
                N 0
            </Text> 
          </View>  
        : <View style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.limit}>
                Loan Repayment Amount
            </Text>
            <Text style={styles.amount}>
                N25,000
            </Text>
            <View style={{ marginTop: 30 }}/>
            <Text style={styles.limit}>
                Due Date
            </Text>
            <Text style={styles.dueDate}>
                Oct. 9, 2021
            </Text>
          </View>
        } 

        </View>
    )
}

export default function LoanScreen({ navigation, route }: RootTabScreenProps<'Loan'>) {
    const [fullname, setFullname] = useState("");
    const [data, setData] = useState({
        user: {
        wallet: 0,
        fullname: ""
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
  var params = route.params;
  return (
    <View style={styles.container}>

    <View>

    <SafeAreaView></SafeAreaView>

    <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>

    <View style={{ marginTop: 20 }}/>

    <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
        <View style={[styles.avatar, { backgroundColor: 'transparent' }]}>
            <AvatarWithName bg_color={user.bg_color} name={data.user.fullname}></AvatarWithName>
        </View>
        <View style={[styles.title, { backgroundColor: 'transparent' }]}>
            <Text style={[styles.loans, { backgroundColor: 'transparent' }]}>
                Loans
            </Text>
        </View>
        <View style={[styles.notification, { backgroundColor: 'transparent' }]}>
            <Icon
            style={styles.icon}
            name='bell'
            color={Colors.purple} />
        </View>
    </View>
    
    <View style={{ marginTop: 20 }}/>

    </ImageBackground>
    
    <View style={[styles.loanCardContainer]}>

        <View style={[styles.loanCard, styles.shadowPropCard]}>
            
                <View style={styles.sideOne}>
                   { loanInformation(params) }
                </View>

                <View style={styles.sideTwo}>
                    <View style={styles.buttonColumnTwo}>
                        { loanAction(navigation, params) }
                    </View>
                    <View style={{ flex: 1, paddingVertical: 20, flexDirection: 'row', backgroundColor: 'transparent', flexWrap: 'wrap' }}>
                        <View style={styles.buttonSideOne}>
                            <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
                            <View style={styles.btn_container}>
                                <View style={styles.btn_icon}>
                                    <Icon
                                        style={styles.button_icon}
                                        name='tags'
                                        color={Colors.purple} />
                                </View>
                                <Text style={styles.button_text}>
                                    Coupons
                                </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonSideTwo}>
                            <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods')}>
                            <View style={styles.btn_container}>
                                <View style={styles.btn_icon}>
                                    <Icon
                                        style={styles.button_icon}
                                        name='credit-card'
                                        color={Colors.purple} />
                                </View>
                                <Text style={styles.button_text}>
                                    Payment
                                    {'\n'}Method
                                </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

        </View> 

    </View>

    <View style={{paddingTop: 10}}/>

    <View style={{ justifyContent: 'center' }}>
        <Text style={styles.history}>
            Loan History
        </Text>
    </View>
    <View style={[styles.divider_container]}>
        <View
            style={styles.divider}
        />
    </View>

    </View>

    <ScrollView style={[{ backgroundColor: 'transparent' }]}> 

            <View style={{marginTop: 10, backgroundColor: 'transparent'}}/>

            {/* <View style={styles.columnThree}>
                <LoanListCard></LoanListCard>
            </View> */}

            <View style={{marginTop: 70, backgroundColor: 'transparent'}}/>

    </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    bg: {

    },
    columnOne: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    avatar: {
      width: '40%',
      paddingLeft: 20,
      includeFontPadding: false,
    },
    title: {
        width: '20%',
        includeFontPadding: false,
    },
    notification: {
      alignItems: 'flex-end',
      width: '40%',
      paddingRight: 20,
      includeFontPadding: false,
    },
    icon: {
      fontSize: 30,
      paddingTop: 5,
      includeFontPadding: false
    },
    loans: {
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        color: Colors.blue,
    },
    loanCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 30,
        width: 0.9 * windowWidth, 
        height: 180,
        backgroundColor: '#932990',
    },
    loanCardContainer: {
        padding: 20,
    },
    sideOne: {
        width: '60%',
        alignSelf: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
    },
    sideTwo: {
        width: '40%',
        alignSelf: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
    },
    limit: {
        paddingLeft: 20,
        fontSize: 12,
        color: Colors.white,
        includeFontPadding: false
    },
    amount: {
        paddingTop: 5,
        paddingLeft: 20,
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.white,
        includeFontPadding: false
    },
    dueDate: {
        paddingTop: 5,
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        includeFontPadding: false
    },
    buttonColumnTwo: {
        paddingTop: 30,
        paddingLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },
    btn_icon: {
        width: 50,
        borderRadius: 10,
        backgroundColor: '#ac5baa',
    },
    btn_container: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: 15,
        backgroundColor: 'transparent',
    },
    button_icon: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 25,
        padding: 10,
    },
    button_text: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 12,
        color: Colors.white,
    },
    buttonSideOne: {
        width: '50%',
        alignSelf: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
        paddingBottom: 10,
    },
    buttonSideTwo: {
        width: '50%',
        alignSelf: 'center',
        includeFontPadding: false,
        backgroundColor: 'transparent',
    },
    history: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.purple,
    },
    divider_container: {
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        includeFontPadding: false
    },
    divider: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    columnThree: {
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingTop: 5,
      paddingBottom: 10,
      backgroundColor: 'transparent',
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
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 5
    },
    shadowPropCard: {
      shadowColor: Colors.purple,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
})