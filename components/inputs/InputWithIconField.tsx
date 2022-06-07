import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const InputWithIconField = (props: any) => {
  return (
    <View style={[styles.container, { 
      paddingLeft: props.padding_left || 20,
      paddingRight: props.padding_right || 20,
      }]}>

      <View style={styles.oneRow}>
        <View style={styles.columnOne}>
          <View style={styles.iconColumn}>
            <Text style={[styles.currency, { fontSize: props.font_size || 25 }]}>
              {props.currency}
            </Text>
          </View>
          <View style={styles.inputColumn}>
            <TextInput
              style={styles.text_input}
              placeholder={props.placeholder}
              value={props.value}
              keyboardType={props.keyboardType}
              onChangeText={props.onChangeText}
            />
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
      paddingTop: 5,
      paddingBottom: 5,
      includeFontPadding: false,
      backgroundColor: 'transparent',
    },
    oneRow: {
      flex: 1,
      backgroundColor: Colors.inputBg,
      borderRadius: 25,
      height: 65,
      includeFontPadding: false
    },
    text_input: {
      paddingEnd: 25,
      fontSize: 14,
      includeFontPadding: false
    },
    field_name: {
      paddingTop: 10,
      paddingEnd: 25,
      fontSize: 12,
      color: Colors.black,
      includeFontPadding: false
    },
    currency: {
      fontWeight: 'bold',
      textAlign: 'center',
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


export default InputWithIconField;