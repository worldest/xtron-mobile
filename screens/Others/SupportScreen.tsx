import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SingleList } from '../../components/lists/SingleList';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const SupportScreen = ({ navigation }) => {
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
                        Support
                    </Text>
                    </View>
                    <View style={styles.columnThree}>

                    </View>
                    
                </View>

                </ImageBackground>

                <View style={{ marginTop: 30 }}/>

                <View style={[styles.list]}>
                    <TouchableOpacity>
                        <SingleList icon='comment' name='Appeal'></SingleList>
                    </TouchableOpacity>
                </View> 

                <View style={[styles.list]}>
                    <TouchableOpacity>
                        <SingleList icon='exclamation' name='Report'></SingleList>
                    </TouchableOpacity>
                </View> 

            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SupportScreen;

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
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.white,
    },
})