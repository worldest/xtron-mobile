import { StyleSheet, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const TransparentButton = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.oneRow}>
        <Text style={styles.button_text}>
          {props.button_name}
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 5,
      paddingBottom: 5,
      includeFontPadding: false
    },
    oneRow: {
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: Colors.white,
      borderRadius: 30,
      height: 50,
      borderColor: Colors.blue,
      borderWidth: 2,
      includeFontPadding: false
    },
    button_text: {
        fontWeight: 'bold',
        color: Colors.blue,
        fontSize: 16,
        textAlign: 'center',
        includeFontPadding: false
    }
});


export default TransparentButton;