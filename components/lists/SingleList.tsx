import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SingleList = (props: any) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.columnOne}>
            <Icon
                style={styles.iconOne}
                name={props.icon}/>
        </View>
        <View style={styles.columnTwo}>
           <Text style={styles.title}>
                {props.name}
           </Text>
        </View>
        <View style={styles.columnThree}>
            <Icon
                style={styles.iconOne}
                name='chevron-right'/>
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
    },
    columnOne: {
        width: '20%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    iconOne: {
        fontSize: 20,
        padding: 15,
        textAlign: 'center',
        color: Colors.black,
        includeFontPadding: false
    },
    columnTwo: {
        width: '60%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    columnThree: {
        width: '20%',
        includeFontPadding: false,
        backgroundColor: 'transparent'
    },
    title: {
        paddingTop: 20,
        marginLeft: -15,
        textAlign: 'left',
        fontSize: 16,
        color: Colors.black,
        includeFontPadding: false,
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
})