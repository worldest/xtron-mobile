import Ionicons from '@expo/vector-icons/build/Ionicons';
import React, { useState } from 'react';
import { Pressable, Dimensions, SafeAreaView, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SmallTransparentButton from '../../components/buttons/SmallTransparentButton';
import { CouponCard } from '../../components/cards/CouponCard';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

function Checkbox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={15} color="white" />}
    </Pressable>
  );
}

const DisbursementAccountScreen = ({ navigation }) => {
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
                            Disbursement Account
                        </Text>
                        </View>
                        <View style={styles.columnThree}>

                        </View>
                        
                    </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>

                    <View>
                        <View style={[styles.divider_container_two]}>
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Xtron Account
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                    <View style={styles.checkbox}>
                                        <Checkbox/>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Bank Account
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                    <View style={styles.checkbox}>
                                        <Checkbox/>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: 360}}/>

                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Button button_name={'Save'}></Button>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}/>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DisbursementAccountScreen;

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
      width: '15%',
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
    columnTwo: {
      width: '70%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '15%',
      backgroundColor: 'transparent',
    },
    divider_container_two: {
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    dividerTwo: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 2,
        includeFontPadding: false
    },
    columnFour: {
        width: '50%',
        backgroundColor: 'transparent',
    },
    bodyText: {
        fontSize: 14,
        alignContent: 'center',
        alignItems: 'center',
    },
    columnFive: {
        width: '50%',
        backgroundColor: 'transparent',
    },
    iconOne: {
        textAlign: 'right',
        fontSize: 25,
        color: Colors.black,
    },
    dividerThree: {
        borderTopColor: Colors.grey,
        borderTopWidth: 2,
        includeFontPadding: false
    },
    bodyTextTwo: {
        fontSize: 16,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    checkbox: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
    },
    checkboxBase: {
        width: 20,
        height: 20,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.blue,
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: Colors.purple
    },
})
