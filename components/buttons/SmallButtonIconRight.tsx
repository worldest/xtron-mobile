import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const SmallButtonIconRight = (props: any) => {
  return (
    <View style={[{
          borderRadius: 30,
          backgroundColor: props.bg_color || '#a569af',
        }, styles.shadowProp]}>
        <Text style={[styles.text, { fontSize: props.font_size }]}>
            {props.text}&nbsp; <Icon
                                style={[styles.iconOne, { fontSize: props.font_size }]}
                                name={props.icon}
                                color={Colors.purple} /> 
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
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 12,
    color: Colors.white,
  },
  iconOne: {
    fontSize: 12,
    padding: 0,
    color: Colors.white,
    includeFontPadding: false
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 10
  },
});


export default SmallButtonIconRight;