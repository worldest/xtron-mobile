import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const Button = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{
          flex: 1,
          justifyContent: 'center', 
          backgroundColor: props.button_bg_color || Colors.purple,
          borderRadius: 30,
          height: 50,
        }}>
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
    backgroundColor: Colors.purple,
    borderRadius: 30,
    height: 50,
    includeFontPadding: false
  },
  button_text: {
      fontWeight: 'bold',
      color: Colors.white,
      fontSize: 16,
      textAlign: 'center',
      includeFontPadding: false
  }
});


export default Button;