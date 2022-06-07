import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const StackedInputField = (props: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Text style={styles.field_name}>
          {props.field_name}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.oneRow}>
          <View style={styles.row_two}>
            <View style={styles.columnOne}>
              <TextInput
                style={styles.text_input}
                placeholder={props.placeholder}
              />
            </View>
            <View style={styles.columnTwo}>
              <Icon
                style={styles.icon}
                name={props.icon_name}
                color={Colors.white} />
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false
    },
    row: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    row_two: {
      height: 50,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    inputContainer: {
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
      height: 50,
      includeFontPadding: false
    },
    field_name: {
      paddingTop: 10,
      paddingBottom: 5,
      paddingStart: 40,
      fontSize: 12,
      color: Colors.black,
      includeFontPadding: false
    },
    text_input: {
      paddingTop: 10,
      paddingStart: 25,
      fontSize: 14,
      includeFontPadding: false
    },
    icon: {
      alignSelf: 'center',
      color: Colors.black,
      padding: 15,
      fontSize: 20,
      includeFontPadding: false
    },
    columnOne: {
      backgroundColor: 'transparent',
      width: '80%',
    },
    columnTwo: {
      backgroundColor: 'transparent',
      width: '20%',
    },
});


export default StackedInputField;