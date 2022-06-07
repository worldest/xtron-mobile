import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const SingleInputField = (props: any) => {
  return (
    <View style={styles.container}>
        <TextInput
          maxLength={1}
          keyboardType='numeric'
          style={styles.text_input}
          onChangeText = {props.onChangeText}
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      includeFontPadding: false,
      flex: 1,
      backgroundColor: Colors.white,
      borderColor: Colors.purple,
      borderWidth: 2,
      borderRadius: 15,
      height: 70,
      width: '100%'
    },
    text_input: {
      padding: 10,
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      color: Colors.black,
      includeFontPadding: false
    },
});


export default SingleInputField;