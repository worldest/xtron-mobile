import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const SmallButton = (props: any) => {
  return (
    <View style={{
          borderRadius: 30,
          backgroundColor: props.bg_color || '#a569af',
        }}>
        <Text style={styles.text}>
          {
            props.icon
            ? <Icon
                style={styles.iconOne}
                name={props.icon}
                color={Colors.purple} /> 
            : ''
          } &nbsp;{props.text}
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    includeFontPadding: false,
    backgroundColor: '#a569af',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 30,
    height: 30,
  },
  columnOne: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    color: Colors.white,
  },
  iconOne: {
    fontSize: 12,
    padding: 0,
    color: Colors.white,
    includeFontPadding: false
  }
});


export default SmallButton;