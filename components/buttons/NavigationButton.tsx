import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const NavigationButton = (props: any) => {
  return (
    <View style={[styles.container, { backgroundColor: props.bg_color || Colors.purple }]}>
       <Icon
          style={styles.icon}
          name={props.icon_name}
          color={props.color || Colors.white} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    includeFontPadding: false
  },
  icon: {
    textAlign: 'center',
    fontSize: 25,
    padding: 0,
    includeFontPadding: false
  }
});


export default NavigationButton;