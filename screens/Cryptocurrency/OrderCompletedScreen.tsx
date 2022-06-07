import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import React from 'react';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackedInputField from '../../components/inputs/StackedInputField';
import FilterButton from '../../components/buttons/FilterButton';
import { TradeCard } from '../../components/cards/TradeCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import AvatarWithName from '../../components/avatars/AvatarWithName';
import AvatarWithNameLeft from '../../components/avatars/AvatarWithNameLeft';
const { width, height } = Dimensions.get('window');

const OrderCompletedScreen = ({ navigation }) => {
  const navigation_button = {
    icon_name: 'angle-left',
    color: Colors.blue,
    bg_color: Colors.white,
  }
  const user = {
    name: 'Johnny',
    text_color: Colors.blue,
  }
    return (
          <ScrollView>
            <View style={styles.container}>

                <View style={styles.heading}>
                    <SafeAreaView></SafeAreaView>
                    <View style={styles.row}>
                        <View style={styles.columnOne}>
                            <View style={styles.divider_container}>  
                                <TouchableOpacity onPress={ () => {
                                    navigation.goBack() 
                                }}>
                                <NavigationButton color={navigation_button.color} bg_color={navigation_button.bg_color} icon_name={navigation_button.icon_name} ></NavigationButton>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.columnTwo}>
                        <View style={styles.title_container}>
                            <Text style={styles.title}>
                               Order completed
                            </Text>
                        </View>
                        </View>
                        <View style={styles.columnThree}>

                        </View>
                    </View>

                </View>

            <View style={{ padding: 15 }}>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>
                        <Icon
                            style={styles.icon}
                            name='check'
                            color={Colors.blue} /> &nbsp; You successfully purchased 0.00000003454 BTC
                    </Text>
                </View>
            </View>

            <View style={styles.rowTwo}>
                <View style={styles.columnBody}>
                    <Text style={styles.buyCoins}>
                        Buy <Text style={{ color: Colors.black }}>BTC</Text>
                    </Text>
                </View>
                <View style={styles.columnOneBody}>
                    <Text style={styles.itemName}>
                        Amount
                    </Text>
                    <Text style={styles.itemName}>
                        Price
                    </Text>
                    <Text style={styles.itemName}>
                        Crypto Amount
                    </Text>
                    <Text style={styles.itemName}>
                        Order No.
                    </Text>
                    <Text style={styles.itemName}>
                        Time created
                    </Text>
                    <Text style={styles.itemName}>
                        Seller
                    </Text>
                </View>
                <View style={styles.columnTwoBody}>
                    <Text style={[styles.itemNameRight, { paddingBottom: 20 }]}>
                        N 29,000.00
                    </Text>
                    <Text style={[styles.itemNameRight, { paddingBottom: 20 }]}>
                        N 24,180,000.00
                    </Text>
                    <Text style={[styles.itemNameRight, { paddingBottom: 20 }]}>
                        0.000003556622 BTC
                    </Text>
                    <Text style={[styles.itemNameRight, { paddingBottom: 20 }]}>
                        222236536546765724
                    </Text>
                    <Text style={styles.itemNameRight}>
                        12/11/22 11:50:34
                    </Text>
                    <View style={{ alignItems: 'flex-end',  paddingTop: 15, paddingRight: 20 }}>
                        <AvatarWithNameLeft text_color={user.text_color} name={user.name}></AvatarWithNameLeft>
                    </View>
                </View>
            </View>
 
            <View style={[{ padding: 15 }]}>
                <View style={[styles.notificationTwo, styles.shadowProp]}>
                    <View style={styles.rowThree}>
                        <View style={styles.columnOneBody}>
                            <Text style={styles.paymentMethod}>
                                Payment Method
                            </Text>
                        </View>
                        <View style={styles.columnTwoBody}>
                            <Text style={styles.bankTransfer}>
                                Bank Transfer
                            </Text>
                        </View>
                    </View>
                </View>
            </View>           

            </View>
         </ScrollView>
    )
}

export default OrderCompletedScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      backgroundColor: Colors.blue,
      paddingTop: 20,
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      paddingTop: 10,
      paddingLeft: 20,
    },
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      paddingTop: 10,
      paddingLeft: 20,
    },
    columnOne: {
      width: '25%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '25%',
      backgroundColor: 'transparent',
    },
    columnOneBody: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnTwoBody: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnBody: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    heading: {
        height: 120,
        backgroundColor: Colors.blue,
        includeFontPadding: false
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
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.white,
    },
    divider_container: {
      backgroundColor: 'transparent',
      padding: 15,
      includeFontPadding: false
    },
    icon: {

    },
    notification: {
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#d6dcfd',
    },
    notificationText: {
        fontSize: 12,
        padding: 15,
        fontWeight: 'bold',
        color: Colors.blue,
    },
    buyCoins: {
        fontWeight: 'bold',
        color: Colors.blue,
        paddingBottom: 20,
    },
    itemName: {
        fontSize: 12,
        color: Colors.black,
        paddingBottom: 25,
    },
    itemNameRight: {
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingRight: 20,
        
    },
    notificationTwo: {
        borderColor: Colors.blue,
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: Colors.white,
        height: 50,
    },
    paymentMethod: {
        fontWeight: 'bold',
        color: Colors.black,
        paddingLeft: 5,
        paddingTop: 1,
    },
    bankTransfer: {
        alignSelf: 'flex-end',
        paddingTop: 3,
        paddingRight: 20,
        fontSize: 12,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 2,  
      elevation: 5
    },
})