import { StyleSheet, AsyncStorage, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import SmallButtonIconRight from '../buttons/SmallButtonIconRight';
import { Modal } from '../modals/modal';
import Button from '../buttons/Button';
import {Paystack} from "react-native-paystack-webview";
import InputField from '../inputs/InputField';
import { useState, useEffect } from 'react';

export const Card = (props: any) => {
  const [amount, setAmount] = useState(0);  
  const [payment, setPayment] = useState(<Text></Text>);
  const [data, setData] = useState({
      user: {
          wallet: 0,
          fullname: "",
          email: "",
          phone: ""
      }
  })
  const [ref, setRef] = useState(0);

  useEffect(() => {
      var getRef = Math.floor(Math.random() * 1000000000);
      setRef(getRef)
    AsyncStorage.getItem("userId").then((user) => {
      if(user !== null && user !== undefined){
        fetch(`http://146.190.27.11/User/getUser.php?id=${user}`, {
          method: "GET"
        })
        .then(response => response.json())
        .then((datas) => {
          console.log(datas)
          setData(datas);
        })
        .catch((error) => {
  
        })
      }
    })
  }, [])  
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);    
  const new_card_button = {
    icon: 'arrow-right',
    text: 'Top-Up',
    bg_color: Colors.blue,
    font_size: 16,
  }
  return (
    <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.row}>


        <View style={styles.columnOne}>
            <Text style={styles.textOne}>
                <Icon
                    style={styles.iconOne}
                    name='credit-card'/>&nbsp; <Text style={{}}>{props.title || 'Top-Up with Debit Card'}</Text>
            </Text>
        </View>

        <View style={styles.columnTwo}>
            {/* <View style={{ alignSelf: 'flex-end', borderRadius: 30, borderWidth: 2, height: 20, width: 20 }}></View> */}
        </View>

        {/* Cards */}

        <View style={styles.rowOne}>
            <View style={styles.rowOneColumnOne}>

                <View style={{height: 50,justifyContent: "center", ...styles.cards}}>
                    
                    <TextInput 
                        placeholder='Enter Amount'
                        style={{height: "100%"}}
                        keyboardType="numeric"
                        onChangeText={(topupamount) => {
                            setAmount(topupamount)
                        }}
                    >

                    </TextInput>
                </View>

            </View>
            <View style={styles.rowOneColumnTwo}>
                <Text style={styles.expire}>
                    Secure by Paystack
                </Text>
            </View>
        </View>

        <View style={[styles.small_button]}>
            <TouchableOpacity onPress={() => {
                setPayment(
                    <Paystack                          
                                  buttonText= {
                                  <Text style={{padding: 20, borderWidth: 2, fontWeight: "200", fontSize: 12, alignSelf: "center", color: "#fff", marginTop: 30}}>Pay with Card/USSD</Text>
                                }
                                  showPayButton={true}
                                  paystackKey="pk_test_fa84bd19c1a5652cbe988ed9703c7a1e5289fcad"                                            
                                  amount={amount}
                                  billingEmail={data.user.email}
                                  style={{alignSelf: "center"}}
                                  //pk_live_b36a37019aa700156af2f15fc5d91d46f97a35c5
                                  //pk_test_4cb1460597ab6e0530fc05c054378352749fcbea
                                  billingMobile={data.user.phone}
                                  billingName={data.user.fullname}
                                  refNumber= {ref}
                                  ActivityIndicatorColor="black"
                                  //SafeAreaViewContainer=
                                  //SafeAreaViewContainerModal=
                                  onCancel={(e) => {
                                  // handle response here
                                  setPayment(<Text></Text>)
                                  }}
                                  onSuccess={(res) => {
                                      
                                    fetch('http://146.190.27.11/User/topUp.php?amount='+amount+'&email=' + data.user.email, {
                                        method: "POST"
                                    })
                                    .then(res => res.json())
                                    .then(Data => {
                                    //var serverReps = Data.Result.message;  
                                    Alert.alert("Information", Data.message);
                                    }).catch(error => console.error(error))
                                      
                                  }}
                                  autoStart={true}
                              />
                )
            } }>
                <SmallButtonIconRight font_size={new_card_button.font_size} bg_color={props.button_bg_color || new_card_button.bg_color} icon={new_card_button.icon} text={new_card_button.text}></SmallButtonIconRight>
            </TouchableOpacity>
            {payment}
        </View>

        {/* Add Card modal */}
            
        <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <Modal.Header>
                        <View style={{ marginTop: 20 }}/>
                          <Text style={[styles.modalTitle, { color: props.button_bg_color || Colors.blue }]}>
                            Card Details
                          </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <View style={styles.modalContainer}>
                            <View style={styles.columnSix}>
                                <Text style={styles.amountText}>
                                    Card Number
                                </Text>
                                <InputField icon_name={ 'credit-card' }  placeholder={'0000 0000 0000 0000'}></InputField>
                            </View>
                            <View style={styles.columnSeven}>
                                <Text style={styles.amountText}>
                                    Expiry Date
                                </Text>
                                <InputField icon_name={ 'calendar' }  placeholder={'MM / YY'}></InputField>
                            </View>
                            <View style={styles.columnEight}>
                                <Text style={styles.amountText}>
                                    CVV
                                </Text>
                                <InputField icon_name={ 'credit-card' }  placeholder={'000'}></InputField>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}/>
                        <View style={styles.modalBtnContainer}>
                            <TouchableOpacity onPress={ handleModal }>
                                <Button button_bg_color={ props.button_bg_color || new_card_button.bg_color } button_name={'Save'}></Button>
                            </TouchableOpacity>
                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                        <View style={{ marginTop: 20 }}/>
                    </Modal.Footer>
                </Modal.Container>
        </Modal>

        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        includeFontPadding: false,
        borderRadius: 30,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },
    rowOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },
    rowOneColumnOne: {
      paddingLeft: 20,
      paddingTop: 5,
      paddingBottom: 10,
      width: '65%',
      backgroundColor: 'transparent',
    },
    rowOneColumnTwo: {
      width: '35%',
      backgroundColor: 'transparent',
    },
    columnOne: {
      width: '80%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '20%',
      padding: 20,
      backgroundColor: 'transparent',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    iconOne: {
      fontSize: 20,
    },
    textOne: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 20
    },
    cards: {
        paddingLeft: 20,
        borderRadius: 30,
        backgroundColor: '#f2f2f2',
    },
    small_button: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 30,
        backgroundColor: 'transparent',
    },
    expire: {
        fontSize: 12,
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingVertical: 15,
    },


    // Modal CSS
    modalContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },
    modalTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
    },
    modalBtnContainer: {
        width: '70%',
        alignSelf: 'center',
        alignContent: 'center'
    },
    columnSix: {
      width: '100%',
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    columnSeven: {
      width: '50%',
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    columnEight: {
      width: '50%',
      paddingTop: 10,
      backgroundColor: 'transparent',
    },
    amountText: {
        paddingLeft: 20,
        paddingBottom: 5,
        backgroundColor: 'transparent',
    },
})