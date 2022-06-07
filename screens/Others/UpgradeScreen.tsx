import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationButton from '../../components/buttons/NavigationButton';
import { BankAccount } from '../../components/payment-methods/BankAccount';
import { Card } from '../../components/payment-methods/Card';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const UpgradeScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left',
      bg_color: Colors.white,
      color: Colors.purple
    }
    return (
        <SafeAreaView>
            <ScrollView>

            <View style={styles.container}>

                <View style={styles.row}>
                <LinearGradient
                    colors={[Colors.purple, Colors.purple, Colors.blue]}
                    style={styles.background}
                />

                    <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
                    <View style={[styles.divider_container, { backgroundColor: 'transparent' }]}>  
                        <TouchableOpacity onPress={ () => {
                            navigation.goBack() 
                        }}>
                        <NavigationButton color={navigation_button.color} bg_color={navigation_button.bg_color} icon_name={navigation_button.icon_name} ></NavigationButton>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.columnTwo}>
                    <Text style={styles.details}>
                        Upgrade Account Limit
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                <View style={{ paddingTop: 20, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
                  <View style={styles.rowDuration}>
                    <View style={styles.durationContainerOne}>
                        <Text style={styles.textActive}>
                          Crypto Transaction
                        </Text>
                    </View>
                    <View style={styles.durationContainerOne}>
                        <Text style={styles.textActive}>
                          Loan
                        </Text>
                    </View>
                  </View>
                </View>

                {/* Tiers */}

            <View style={{ paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'transparent' }}>

                {/* Tier 1 */}
                <View style={[styles.tierCard, styles.shadowProp]}>  
                    <View style={[styles.rowTwo]}>

                        <View style={styles.cardColumnThree}>
                            <Text style={[styles.head, { color: Colors.solidGrey }]}>
                                KYC 1
                            </Text>
                        </View>
                        <View style={styles.cardColumnOne}>
                            <Text style={styles.body}>
                               Monthly Transaction
                            </Text>
                        </View>
                        <View style={styles.cardColumnSeven}>
                            <Text style={styles.bodyTwo}>
                               Min.
                            </Text>
                            <Text style={styles.bodyTwo}>
                               Max.
                            </Text>
                        </View>
                        <View style={styles.cardColumnTwo}>
                            <Text style={styles.bodyTwo}>
                               $10
                            </Text>
                            <Text style={styles.bodyTwo}>
                               $3,000
                            </Text>
                        </View>

                    </View>

                    <View style={{paddingTop: 10}}/>

                    <View style={styles.rowTwo}>

                        <View style={styles.cardColumnFour}>
                            <View style={styles.cardColumnOne}>
                                <Text onPress={() => {
                                    Alert.alert("Information", "This is the default KYC for new users. Where you can ONLY send $3000 worth of Asset")
                                }} style={styles.tierButton}>
                                    Upgrade
                                </Text>
                            </View>
                            <View style={styles.cardColumnEight}>
                                <Text style={styles.tierButtonTwo}>
                                    <Icon
                                        style={styles.tierIcon}
                                        name='chevron-right'/>
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </View>

            </View>


            <View style={{ paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'transparent' }}>

                {/* Tier 2 */}
                <View style={[styles.tierCard, styles.shadowProp]}>  
                    <View style={[styles.rowTwo]}>

                        <View style={styles.cardColumnThree}>
                            <Text style={[styles.head, { color: Colors.blue }]}>
                                KYC 2
                            </Text>
                        </View>
                        <View style={styles.cardColumnOne}>
                            <Text style={styles.body}>
                               Monthly Transaction
                            </Text>
                        </View>
                        <View style={styles.cardColumnSeven}>
                            <Text style={styles.bodyTwo}>
                               Min.
                            </Text>
                            <Text style={styles.bodyTwo}>
                               Max.
                            </Text>
                        </View>
                        <View style={styles.cardColumnTwo}>
                            <Text style={styles.bodyTwo}>
                               $10
                            </Text>
                            <Text style={styles.bodyTwo}>
                               Unlimited
                            </Text>
                        </View>

                    </View>

                    <View style={{paddingTop: 10}}/>

                    <View style={styles.rowTwo}>

                        <View style={styles.cardColumnFive}>
                            <View style={styles.cardColumnOne}>
                                <Text onPress={() => {
                                    navigation.navigate("EditProfile");
                                }} style={styles.tierButton}>
                                    Upgrade
                                </Text>
                            </View>
                            <View style={styles.cardColumnEight}>
                                <Text style={styles.tierButtonTwo}>
                                    <Icon
                                        style={styles.tierIcon}
                                        name='chevron-right'/>
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </View>

            </View>



            {/* <View style={{ paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'transparent' }}>

                {/* Tier 3 
                <View style={[styles.tierCard, styles.shadowProp]}>  
                    <View style={[styles.rowTwo]}>

                        <View style={styles.cardColumnThree}>
                            <Text style={[styles.head, { color: Colors.purple }]}>
                                KYC 3
                            </Text>
                        </View>
                        <View style={styles.cardColumnOne}>
                            <Text style={styles.body}>
                               Monthly Transaction
                            </Text>
                        </View>
                        <View style={styles.cardColumnSeven}>
                            <Text style={styles.bodyTwo}>
                               Min.
                            </Text>
                            <Text style={styles.bodyTwo}>
                               Max.
                            </Text>
                        </View>
                        <View style={styles.cardColumnTwo}>
                            <Text style={styles.bodyTwo}>
                               $500,000
                            </Text>
                            <Text style={styles.bodyTwoStared}>
                               Infinity
                            </Text>
                        </View>

                    </View>

                    <View style={{paddingTop: 10}}/>

                    <View style={styles.rowTwo}>

                        <View style={styles.cardColumnSix}>
                            <View style={styles.cardColumnOne}>
                                <Text style={styles.tierButton}>
                                    Upgrade
                                </Text>
                            </View>
                            <View style={styles.cardColumnEight}>
                                <Text style={styles.tierButtonTwo}>
                                    <Icon
                                        style={styles.tierIcon}
                                        name='chevron-right'/>
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                </View>

            </View> */}

            <View style={{marginTop: 100}}/>

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default UpgradeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false,
      backgroundColor: 'transparent',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 40,
      backgroundColor: 'transparent',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 120,
        includeFontPadding: false
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    cardColumnOne: {
        width: '55%',
        backgroundColor: 'transparent',
    },
    cardColumnEight: {
        width: '45%',
        backgroundColor: 'transparent',
    },
    cardColumnTwo: {
        width: '30%',
        backgroundColor: 'transparent',
    },
    cardColumnSeven: {
        width: '15%',
        textAlign: 'right',
        backgroundColor: 'transparent',
    },
    cardColumnThree: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    columnOne: {
      width: '15%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '75%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '10%',
      backgroundColor: 'transparent',
    },
    cardColumnFour: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: Colors.solidGrey,
        borderRadius: 30,
    },
    cardColumnFive: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: Colors.blue,
        borderRadius: 30,
    },
    cardColumnSix: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: Colors.purple,
        borderRadius: 30,
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    details: {
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.white, 
    },
    tierCard: {
        borderRadius: 30,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    head: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    body: {
        fontSize: 12,
        paddingLeft: 20,
        color: Colors.black,
    },
    bodyTwo: {
        fontSize: 12,
        paddingRight: 20,
        color: Colors.black,
        textAlign: 'right',
    },
    bodyTwoStared: {
        fontSize: 12,
        paddingRight: 20,
        color: Colors.purple,
        textAlign: 'right',
    },
    tierButton: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold',
    },
    tierButtonTwo: {
        color: Colors.white,
        alignSelf: 'flex-end',
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    tierIcon: {
        fontSize: 20,
    },
    rowDuration: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: Colors.grey,
      borderRadius: 30,
    },
    durationContainerOne: {
      width: '50%',
      borderRadius: 30,
      backgroundColor: Colors.blue,
    },
    durationContainerTwo: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    textActive: {
      fontSize: 12,
      fontWeight: 'bold',
      color: Colors.white,
      padding: 10,
      textAlign: 'center'
    },
    textInactive: {
      fontSize: 12,
      fontWeight: 'bold',
      color: Colors.blue,
      padding: 10,
      textAlign: 'center'
    }
})