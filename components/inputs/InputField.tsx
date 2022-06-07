import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const InputField = (props: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.oneRow}>
        {
          props.field_name
          && <Text style={styles.field_name}>
              {props.field_name}
             </Text>
        }
        <View style={styles.columnOne}>
          <View style={styles.inputColumn}>
            <TextInput
              style={styles.text_input}
              placeholder={props.placeholder}
              onChangeText={props.onChangeText}              
              keyboardType={props.keyboardType}
            />
          </View>
          <View style={styles.iconColumn}>
            <Icon
              style={[styles.icon, { fontSize: props.font_size || 20 }]}
              name={props.icon_name}
              color={Colors.black} />
          </View>
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 5,
      paddingBottom: 5,
      includeFontPadding: false
    },
    oneRow: {
      flex: 1,
      backgroundColor: Colors.inputBg,
      borderRadius: 25,
      height: 65,
      includeFontPadding: false
    },
    text_input: {
      paddingStart: 25,
      fontSize: 14,
      includeFontPadding: false
    },
    field_name: {
      paddingTop: 10,
      paddingStart: 25,
      fontSize: 12,
      color: Colors.black,
      includeFontPadding: false
    },
    icon: {
      paddingEnd: 25,
      textAlign: 'right',
      color: Colors.black,
    },
    columnOne: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      alignContent: 'center',
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    inputColumn: {
      textAlign: 'left',
      width: '80%',
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
    iconColumn: {
      width: '20%',
      backgroundColor: 'transparent',
      includeFontPadding: false
    },
});


export default InputField;