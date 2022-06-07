import { ScrollView, View, Dimensions, Image, Text, Button, StyleSheet, TouchableOpacityBase, TouchableOpacity } from 'react-native';  
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallButton from '../../components/buttons/SmallButton';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const CardsScrolling = (props: any) => {
    const [wallet, setWallet] = useState(0);

    useEffect(() => {
        var data = props.data;
            console.log(data)
            if(data.user.wallet !== undefined){
                setWallet(data.user.wallet);
            }
    }, [])
    
    const add_money_btn = {
        icon: 'plus',
        text: 'Add money'
    }  
    const send_money_btn = {
        icon: 'paper-plane',
        text: 'Send money'
    }  
    const appy_for_loan_btn = {
        icon: 'check-circle',
        text: 'Apply for a loan',
        bg_color: '#b166af'
    }
    return (
        <ScrollView  horizontal={true} style={styles.container}>  
            
            {/* Balance */}

            <View style={{ paddingLeft: 20 }}> 
            <View style={styles.balanceCard}>  
                <LinearGradient
                    colors={[Colors.purple, Colors.purple, Colors.blue]}
                    style={styles.background}
                />
                
                <View style={styles.columnOne}>
                    <View style={styles.textColumn}>
                        <Text style={styles.small_title}>
                            Total balance
                        </Text>
                        <Text style={styles.amount}>
                            N {wallet}&nbsp;<Icon style={styles.iconTwo} name='eye-slash' />
                        </Text>
                    </View>
                    <View style={styles.iconColumn}>
                        <Icon
                            style={styles.iconOne}
                            name='shield'
                            color={Colors.purple} />
                    </View>
                </View>

                <View style={styles.buttonColumnOne}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('PaymentMethods')}>
                        <SmallButton icon={add_money_btn.icon} text={add_money_btn.text}></SmallButton>
                    </TouchableOpacity>
                    <View style={{paddingRight: 10}}></View>
                    <SmallButton icon={send_money_btn.icon} text={send_money_btn.text}></SmallButton>
                </View>

            </View>  
            </View>

            <View style={{ paddingHorizontal: 10 }}></View>

            {/* Loan */}
            <View style={{ paddingRight: 20 }}> 
            <View style={styles.loanCard}>  
            
                <View style={styles.columnOne}>
                    <View style={styles.textColumnTwo}>
                        <Text style={styles.small_title}>
                            Your loan
                        </Text>
                        <Text style={styles.bold_title}>
                           Need urgent cash?
                        </Text>
                        <Text style={styles.small_title_two}>
                            Apply for a loan with low interest
                        </Text>
                    </View>
                    <View style={styles.iconColumnTwo}>
                        <Icon
                            style={styles.iconOne}
                            name='history'
                            color={Colors.purple} />
                    </View>
                </View>

                <View style={styles.buttonColumnTwo}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('RequestLoan')}>
                        <SmallButton bg_color={appy_for_loan_btn.bg_color} icon={appy_for_loan_btn.icon} text={appy_for_loan_btn.text}></SmallButton>
                    </TouchableOpacity>
                </View>

            </View> 
            </View>
        
        </ScrollView>  
    );  
}  

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        paddingVertical: 20,
    },
    balanceCard: {
        flex: 1,  
        borderRadius: 30,
        width: 0.85 * windowWidth, 
        height: 150, 
    },
    loanCard: {
        backgroundColor: Colors.purple,
        borderRadius: 30,
        width: 0.85 * windowWidth, 
        height: 150, 
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        borderRadius: 30,
        height: 150,
    },
    small_title: {
        fontSize: 12,
        fontFamily: 'Quicksand_Book',
        color: Colors.white,
        paddingLeft: 20,
        paddingTop: 20,
    },
    small_title_two: {
        fontFamily: 'Quicksand_Book',
        fontSize: 12,
        color: Colors.white,
        paddingLeft: 20,
    },
    amount: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        color: Colors.white,
        paddingLeft: 20,
        paddingTop: 5,
    },
    columnOne: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    iconOne: {
      fontSize: 50,
      padding: 0,
      color: Colors.white,
      includeFontPadding: false
    },
    textColumn: {
        width: '60%',
        includeFontPadding: false,
    },
    iconColumn: {
        alignItems: 'flex-end',
        width: '40%',
        paddingRight: 20,
        paddingTop: 25,
        includeFontPadding: false,
    },
    textColumnTwo: {
        width: '70%',
        includeFontPadding: false,
    },
    iconColumnTwo: {
        alignItems: 'flex-end',
        width: '30%',
        paddingRight: 20,
        paddingTop: 25,
        includeFontPadding: false,
    },
    buttonColumnOne: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    buttonColumnTwo: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    iconTwo: {
      fontSize: 15,
      color: Colors.white,
      includeFontPadding: false
    },
    bold_title: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: Colors.white,
        paddingLeft: 20,
        paddingTop: 5,
    }
}) 