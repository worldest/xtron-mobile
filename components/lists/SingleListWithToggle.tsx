import { StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

export const SingleListWithToggle = (props: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.columnOne}>
            <Icon
                style={styles.iconOne}
                name={props.icon}/>
        </View>
        <View style={styles.columnTwo}>
           <Text style={styles.title}>
                {props.name}
           </Text>
        </View>
        <View style={styles.columnThree}>
            <Switch
                trackColor={{ false: "#767577", true: '#f8cffd' }}
                thumbColor={isEnabled ? Colors.purple : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                style={{ alignSelf: 'center' }}
                value={isEnabled}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      borderRadius: 30,
    },
    columnOne: {
        width: '20%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    iconOne: {
        fontSize: 20,
        padding: 15,
        textAlign: 'center',
        color: Colors.black,
        includeFontPadding: false
    },
    columnTwo: {
        width: '60%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    columnThree: {
        width: '20%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    title: {
        paddingTop: 15,
        marginLeft: -15,
        textAlign: 'left',
        fontSize: 18,
        color: Colors.black,
        includeFontPadding: false,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
})