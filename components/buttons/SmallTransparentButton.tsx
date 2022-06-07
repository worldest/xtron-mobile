import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const SmallTransparentButton = (props: any) => {
  return (
    <View style={{
          borderRadius: 30,
          borderColor: props.border_color || Colors.purple,
          borderWidth: 2,
          backgroundColor: 'transparent',
        }}>
        <Text style={[styles.text, {fontSize: props.font_size || 13, color: props.text_color || Colors.black }]}>
          {props.text}&nbsp;
          {
            props.icon
            ? <Icon
                style={[styles.iconOne, { color: props.font_color || Colors.white, fontSize: props.font_size }]}
                name={props.icon}
                color={Colors.purple} />
            : ''
          }
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    color: Colors.black,
    fontWeight: 'bold',
  },
  iconOne: {
    fontSize: 12,
    padding: 0,
    includeFontPadding: false
  }
});


export default SmallTransparentButton;