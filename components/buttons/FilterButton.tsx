import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const FilterButton = (props: any) => {
  return (
    <View style={styles.container}>
       <Icon
          style={styles.icon}
          name={props.icon_name}
          color={Colors.white} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: Colors.purple,
    borderWidth: 2,
    backgroundColor: Colors.white,
    includeFontPadding: false
  },
  icon: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.purple,
    padding: 0,
    includeFontPadding: false
  }
});


export default FilterButton;