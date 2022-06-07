import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const AvatarWithName = (props: any) => {
  return (
    <View style={[styles.container, { backgroundColor: props.bg_color }]}>

        <View style={styles.avatar}>
        </View>
        <Text style={[styles.title, { color: props.text_color || Colors.purple }]}>
            {props.name} {
                            props.icon_name   
                         &&   <Icon
                                style={styles.icon}
                                name={props.icon_name}
                                color={props.text_color} />
                         }
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        borderWidth: 2,
        height: 40,
        width: 40,
        borderColor: Colors.black,
        backgroundColor: Colors.gray
    },
    container: {
        flexDirection: 'row',
        includeFontPadding: false,
    },
    title: {
        padding: 7,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.purple
    },
    icon: {
      fontSize: 10,
      padding: 0,
      includeFontPadding: false
    }
})

export default AvatarWithName;