import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoanListCard = ({ }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.columnOne}>
         <Text style={styles.loan}>
             Loan Amount
         </Text>
         <Text style={styles.amount}>
             N 12,700
         </Text>
         <Text style={styles.footer_one}>
            Start Date: 26/07/2021
         </Text>
         <Text style={styles.footer_two}>
            Payment Date: 26/07/2021
         </Text>
      </View>
      <View style={styles.columnTwo}>
         
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
      backgroundColor: Colors.white,
    },
    columnOne: {
      width: '70%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      backgroundColor: 'transparent',
    },
    loan: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20,
    },
    amount: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingBottom: 5,
        color: Colors.purple,
    },
    footer_one: {
        paddingLeft: 20,
        fontSize: 12,
        color: Colors.black,
    },
    footer_two: {
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 12,
        color: Colors.black,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
})