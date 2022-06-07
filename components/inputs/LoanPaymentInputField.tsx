import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const LoanPaymentInputField = (props: any) => {
  return (
    <View style={styles.container}>
        <View style={styles.columnOne}>
            <Text style={styles.currency}>
                N
            </Text>
        </View>
        <View style={styles.columnTwo}>
            <TextInput
              style={styles.text_input}
              placeholder='Repay Amount'
            />
        </View>
        <View style={styles.columnThree}>
            <TouchableOpacity onPress={() => props.navigation.navigate('LoanRepaymentMethods')}>
                <Text style={styles.button}>
                    Pay
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      paddingTop: 5,
      paddingBottom: 5,
      includeFontPadding: false
    },
    columnOne: {
        width: '20%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: Colors.gray,
    },
    columnTwo: {
        width: '60%',
        backgroundColor: Colors.gray,
    },
    columnThree: {
        width: '20%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.purple,
    },
    currency: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingRight: 5,
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text_input: {
      paddingTop: 15,
      paddingBottom: 10,
      fontSize: 16,
      includeFontPadding: false
    },
})

export default LoanPaymentInputField;