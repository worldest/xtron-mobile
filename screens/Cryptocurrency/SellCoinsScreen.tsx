import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarWithName from '../../components/avatars/AvatarWithName';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const SellCoinsScreen = ({ navigation }) => {
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
      button_bg_color: Colors.purple
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
                        Sell Bitcoin
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>
                
                <View style={styles.row}>
                  <View style={styles.columnFour}>
                    <AvatarWithName icon_name={user.icon_name} text_color={user.text_color} name={user.name}></AvatarWithName>
                  </View>
                  <View style={styles.columnFive}>
                    <Text style={styles.textContainer}>
                        Price
                        {'\n'} 
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.purple }}>N</Text><Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.purple }}>24,180,000.00</Text>
                    </Text>
                    <Text style={styles.textContainerTwo}>
                        Range: <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text><Text style={{ fontWeight: 'bold' }}>5,000.00</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>-</Text> <Text style={{ fontSize: 10, fontWeight: 'bold' }}>N</Text> <Text style={{ fontWeight: 'bold' }}>100,000.00</Text> 
                    </Text>
                  </View>
                </View>

                <View style={styles.rowTwo}>
                  <View style={styles.columnSix}>
                    <InputWithIconField font_size={amount.font_size} placeholder={amount.placeholder} currency={amount.currency}></InputWithIconField>
                  </View>
                </View>

                <View style={{ paddingTop: 10 }}/>

                <View style={[styles.rowTwo, { paddingBottom: 10 }]}>
                  <View style={styles.columnFour}>
                    <Text style={styles.amountOne}>
                      0.00 BTC
                      {'\n'}
                      0.00 NGN
                    </Text>
                  </View>
                  <View style={styles.columnFive}>
                    <Text style={styles.amountTwo}>
                      0.00 BTC
                      {'\n'}
                      0.00 NGN
                    </Text>
                  </View>
                </View>

                <View style={{padding: 20}}>
                  <TouchableOpacity onPress={() => navigation.navigate('PaymentMethods')}>
                    <View style={styles.paymentContainer}>
                      <View style={styles.rowTwo}>
                        <View style={styles.columnSeven}>
                          <Text style={styles.paymentText}>
                            Select Payment Method
                          </Text>
                        </View>
                        <View style={styles.columnEight}>
                          <Icon
                            style={styles.icon}
                            name='chevron-right'
                            color={Colors.purple} />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>


          
                <View style={{marginTop: 200}}/>

                <TouchableOpacity onPress={ () => {
                        navigation.navigate('Wallet') 
                      }}>
                  <Button button_bg_color={ continue_btn.button_bg_color } button_name={ continue_btn.button_name }></Button>
                </TouchableOpacity>

                <View style={{marginTop: 30}}/>

            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default SellCoinsScreen;

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
    columnSeven: {
      width: '80%',
      backgroundColor: 'transparent',
    },
    columnEight: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    paymentContainer: {
      width: '100%',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: Colors.purple,
      backgroundColor: 'transparent',
    },
    amountOne: {
      fontWeight: 'bold',
      fontSize: 12,
      color: Colors.black,
      textAlign: 'left',
    },
    amountTwo: {
      paddingRight: 20,
      fontSize: 12,
      color: Colors.purple,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    paymentText: {
      fontSize: 14,
      padding: 20,
      fontWeight: 'bold',
      color: Colors.purple,
    },
    icon: {
      fontSize: 20,
      padding: 20,
      textAlign: 'right',
    }
})