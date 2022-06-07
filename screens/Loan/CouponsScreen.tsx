import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import NavigationButton from '../../components/buttons/NavigationButton';
import { CouponCard } from '../../components/cards/CouponCard';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const CouponsScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left'
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
                        Coupons
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>
                
                <View style={{ marginTop: 20 }}/>

                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard></CouponCard>
                </View>

                <View style={{ marginTop: 30 }}/>
                
                <TouchableOpacity onPress={() => navigation.navigate('InvalidCoupons')}>
                  <Text style={styles.invalid_list}>
                      View Invalid Coupon
                  </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 50 }}/>

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default CouponsScreen;

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
      paddingBottom: 20,
      paddingTop: 20,
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
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    columnFour: {
      backgroundColor: 'transparent',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 15,
      paddingTop: 5,
    },
    invalid_list: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      color: Colors.purple,
    }
})