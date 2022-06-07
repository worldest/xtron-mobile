import { StyleSheet, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import SmallButtonIconRight from '../buttons/SmallButtonIconRight';
import { Modal } from '../modals/modal';
import InputField from '../inputs/InputField';
import Button from '../buttons/Button';
import StackedInputField from '../inputs/StackedInputField';
import { useEffect } from 'react';

export const BankAccount = (props: any) => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const refresh = () => {
    AsyncStorage.getItem("bankName").then((bankName_) => {
      setBankName(bankName_)
    })
    AsyncStorage.getItem("accountName").then((accountName_) => {
      setAccountName(accountName_)
    })
    AsyncStorage.getItem("accountNumber").then((accountNumber_) => {
      setAccountNumber(accountNumber_)
    })
  }
  const handleModal = () => {
    setIsModalVisible(() => !isModalVisible);
    return refresh;
  } 
  const new_card_button = {
    icon: 'edit',
    text: 'Edit Bank Account',
    bg_color: Colors.blue,
    font_size: 16,
  }
  useEffect(() => {
    AsyncStorage.getItem("bankName").then((bankName_) => {
      setBankName(bankName_)
    })
    AsyncStorage.getItem("accountName").then((accountName_) => {
      setAccountName(accountName_)
    })
    AsyncStorage.getItem("accountNumber").then((accountNumber_) => {
      setAccountNumber(accountNumber_)
    })
  }, [])
  
  return (
    <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.row}>


        <View style={styles.columnOne}>
            <Text style={styles.textOne}>
                <Icon
                    style={styles.iconOne}
                    name='university'/>&nbsp; <Text style={{}}>Bank Transfer</Text>
            </Text>
        </View>

        <View style={styles.columnTwo}>
            <View style={{ alignSelf: 'flex-end', borderRadius: 30, borderWidth: 2, height: 20, width: 20 }}></View>
        </View>

        {/* Bank Accounts */}

        <View style={styles.rowOne}>
            <View style={styles.rowOneColumnOne}>

              <Text style={[styles.bankName, { color: props.bank_name_color || Colors.blue }]}>
                {bankName}
              </Text>
              <Text style={styles.bankNameSmall}>
                {accountNumber}
              </Text>
              <Text style={styles.bankNameSmall}>
                {accountName}
              </Text>

            </View>
        </View>

        <View style={[styles.small_button]}>
            <TouchableOpacity onPress={ handleModal }>
                <SmallButtonIconRight font_size={new_card_button.font_size} bg_color={props.button_bg_color || new_card_button.bg_color} icon={new_card_button.icon} text={new_card_button.text}></SmallButtonIconRight>
            </TouchableOpacity>
        </View>



        {/* Add Bank account modal */}
            
        <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <Modal.Header>
                        <View style={{ marginTop: 20 }}/>
                          <Text style={[styles.modalTitle, { color: props.button_bg_color || Colors.blue }]}>
                            Bank Details
                          </Text>
                          <Text style={styles.textTwo}>
                            Bank account information must match bio data
                          </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <View style={styles.modalContainer}>
                            <View style={styles.columnSix}>
                              <InputField onChangeText={(text) => {
                                  AsyncStorage.setItem("bankName", text);
                                }} placeholder={'Zenith Bank'} icon_name={'building'} ></InputField>
                            </View>
                            <View style={styles.columnSix}>
                                <Text style={styles.amountText}>
                                    Account Number
                                </Text>
                                <InputField onChangeText={(text) => {
                                  AsyncStorage.setItem("accountNumber", text);
                                }} placeholder={'01234567890'}></InputField>
                            </View>
                            <View style={styles.columnSix}>
                                <Text style={styles.amountText}>
                                    Account Name
                                </Text>
                                <InputField onChangeText={(text) => {
                                  AsyncStorage.setItem("accountName", text);
                                }} placeholder={'Nwekete Bright Chidi'}></InputField>
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
    width: '100%',
    backgroundColor: 'transparent',
  },
  bankName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  bankNameSmall: {
    fontSize: 12,
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  modalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
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
  amountText: {
      paddingLeft: 20,
      paddingBottom: 5,
      backgroundColor: 'transparent',
  },
  textTwo: {
      color: Colors.black,
      paddingTop: 5,
      paddingBottom: 20,
      fontSize: 12,
      textAlign: 'center',
  }
})