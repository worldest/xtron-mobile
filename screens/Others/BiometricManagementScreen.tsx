import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SingleList } from '../../components/lists/SingleList';
import { SingleListWithToggle } from '../../components/lists/SingleListWithToggle';
import { BankAccount } from '../../components/payment-methods/BankAccount';
import { Card } from '../../components/payment-methods/Card';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const BiometricManagementScreen = ({ navigation }) => {
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
                        Biometric Management
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 30 }}/>

                {/* Fingerprint list */}
                <View style={styles.rowTwo}>
                        <View style={styles.columnFour}>
                            <Text style={styles.textOne}>
                                Fingerprint 1
                            </Text>
                        </View>
                        <View style={styles.columnFive}>
                            <Text style={styles.icons}>
                                <Icon
                                    style={styles.iconOne}
                                    name='times-circle'/> &nbsp;&nbsp;&nbsp; 
                                <Icon
                                    style={styles.iconOne}
                                    name='edit'/>
                            </Text>
                        </View>
                        <View style={styles.columnSix}>
                            <View style={[styles.divider_container_two]}>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                </View>

                <View style={styles.rowTwo}>
                        <View style={styles.columnFour}>
                            <Text style={styles.textOne}>
                                Fingerprint 2
                            </Text>
                        </View>
                        <View style={styles.columnFive}>
                            <Text style={styles.icons}>
                                <Icon
                                    style={styles.iconOne}
                                    name='times-circle'/> &nbsp;&nbsp;&nbsp; 
                                <Icon
                                    style={styles.iconOne}
                                    name='edit'/>
                            </Text>
                        </View>
                        <View style={styles.columnSix}>
                            <View style={[styles.divider_container_two]}>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                </View>

                {/* Add Fingerprint */}
                <View style={styles.rowTwo}>
                        <View style={styles.columnFour}>
                            <Text style={styles.textOne}>
                                Add Fingerprint
                            </Text>
                        </View>
                        <View style={styles.columnFive}>
                            <Text style={styles.iconsTwo}>
                                <Icon
                                    style={styles.iconTwo}
                                    name='plus-circle'/>
                            </Text>
                        </View>
                        <View style={styles.columnSix}>
                            <View style={[styles.divider_container_two]}>
                                <View style={styles.divider}/>
                            </View>
                        </View>
                </View>

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default BiometricManagementScreen;

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
      paddingTop: 20,
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
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    columnOne: {
      width: '15%',
      backgroundColor: 'transparent',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    columnTwo: {
      width: '70%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '15%',
      backgroundColor: 'transparent',
    },
    details: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 20,
      color: Colors.blue, 
    },
    columnFour: {
        width: '70%',
        backgroundColor: 'transparent',
    },
    columnFive: {
      width: '30%',
      backgroundColor: 'transparent',
    },
    columnSix: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    divider: {
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    divider_container_two: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    iconOne: {
        fontSize: 20,
        color: Colors.blue,
    },
    iconTwo: {
        fontSize: 25,
        color: Colors.blue,
    },
    textOne: {
        fontSize: 16,
        paddingLeft: 30,
    },
    icons: {
        alignSelf: 'flex-end',
        paddingRight: 30,
        paddingTop: 3,
    },
    iconsTwo: {
        alignSelf: 'flex-end',
        paddingRight: 30,
    },
})