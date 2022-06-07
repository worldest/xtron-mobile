import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableHighlight, TouchableOpacity } from 'react-native';
import NavigationButton from '../../components/buttons/NavigationButton';
import { CouponCard } from '../../components/cards/CouponCard';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const InvalidCouponsScreen = ({ navigation }) => {
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const small_btn_props = {
      text_color: Colors.grey,
      bg_color: '#f2f2f2',
      white: Colors.white,
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
                        Invalid Coupons
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

              </ImageBackground>

                <View style={{ marginTop: 20 }}/>
                
                <View style={{ marginTop: 20 }}/>

                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>
                <View style={styles.columnFour}>
                    <CouponCard bg_color={small_btn_props.bg_color} white={small_btn_props.white} text_color={small_btn_props.text_color} ></CouponCard>
                </View>

                <View style={{ marginTop: 30 }}/>

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default InvalidCouponsScreen;

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
})