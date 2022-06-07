import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SingleInputField from '../../components/inputs/SingleInputField';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal } from '../../components/modals/modal';

const FingerPrintAuthenticationScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = React.useState(true);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);    
    const navigation_button = {
      icon_name: 'angle-left'
    }
    return (
      <SafeAreaView>
        <ScrollView>
            <View style={styles.body}>

            
            <Modal isVisible={isModalVisible}>
                <Modal.Container>
                    <Modal.Body>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.text}>
                                    Fingerprint Authentication
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {  navigation.goBack() }}>
                                    <Image style={styles.avatar} source={require('../../assets/images/fingerprint-auth.png')} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.textTwo}>
                                    Confirm fingerprint to continue
                                </Text>
                            </View>
                        </View>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal.Container>
            </Modal>


            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default FingerPrintAuthenticationScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        includeFontPadding: false
    },
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    avatar: {
      height: 150,
      width: 150,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: Colors.purple,
        fontSize: 14,
        padding: 20,
        textAlign: 'center',
    },
    textTwo: {
        color: Colors.grey,
        paddingTop: 20,
        fontSize: 12,
        textAlign: 'center',
    }
})
