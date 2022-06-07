import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const AvatarWithNameLeft = (props: any) => {
  return (
    <View style={styles.container}>
        
        <Text style={[styles.title, { color: props.text_color || Colors.purple }]}>
            {props.name}
        </Text>
        <View style={styles.avatar}>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 50,
        borderWidth: 2,
        height: 35,
        width: 35,
        borderColor: Colors.black,
        backgroundColor: Colors.grey
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
    }
})

export default AvatarWithNameLeft;