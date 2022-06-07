import { Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import React from 'react';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackedInputField from '../../components/inputs/StackedInputField';
import FilterButton from '../../components/buttons/FilterButton';
import { TradeCard } from '../../components/cards/TradeCard';
import { Modal } from '../../components/modals/modal';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const TradesScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);  
  const navigation_button = {
    icon_name: 'angle-left'
  }
  const filter_button = {
    icon_name: 'filter'
  }
    return (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>

            <View style={styles.row}>

            <ImageBackground source={require('../../assets/images/placeholder.png')} resizeMode="cover" style={styles.bg}>

            <View style={styles.rowContainer}>
                <View style={[styles.columnOne, { backgroundColor: 'transparent' }]}>
                  <View style={[styles.divider_container, { backgroundColor: 'transparent' }]}>  
                    <TouchableOpacity onPress={ () => {
                        navigation.goBack() 
                      }}>
                      <NavigationButton icon_name={navigation_button.icon_name} ></NavigationButton>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.columnTwo, { backgroundColor: 'transparent' }]}>
                  <Text style={[styles.details, { backgroundColor: 'transparent' }]}>
                      Trades
                  </Text>
                </View>
                <View style={[styles.columnThree, { backgroundColor: 'transparent' }]}>
                  <View style={[styles.divider_container_two, { backgroundColor: 'transparent' }]}>  
                    <TouchableOpacity onPress={ handleModal }>
                      <FilterButton icon_name={filter_button.icon_name} ></FilterButton>
                    </TouchableOpacity>
                  </View>
                </View>
                
            </View>

            </ImageBackground>
            
                    <View style={{ marginTop: 80 }}/>

                        {/* <View style={[styles.tradeCard]}>
                          <TouchableOpacity onPress={ () => {
                                navigation.navigate('OrderCompleted')
                              }}>
                            <TradeCard status={ 'completed' }></TradeCard>
                          </TouchableOpacity>
                        </View> */}
                        

                    </View>

                    <View style={{marginTop: 30, backgroundColor: 'transparent'}}/>

                    <Modal isVisible={isModalVisible}>
                        <Modal.Container>
                            <Modal.Header>
                                <TouchableOpacity onPress={ handleModal }>
                                    <Text style={[styles.cancelText, { paddingTop: 30 }]}>
                                        Filter
                                    </Text>
                                </TouchableOpacity>
                            </Modal.Header>
                            <Modal.Body>
                                <View style={{paddingLeft: 10, paddingTop: 10,  paddingBottom: 10, paddingRight: 10}}>
                                  <View style={{ paddingBottom: 10 }}>
                                      <Text style={{ }}>
                                         Type
                                      </Text>
                                  </View>
                                  <TouchableOpacity onPress={ handleModal }>
                                    <View style={[styles.paymentContainer, styles.shadowPropTwo]}>
                                      <View style={styles.rowTwo}>
                                        <View style={styles.columnSeven}>
                                          <Text style={styles.paymentText}>
                                            Buy
                                          </Text>
                                        </View>
                                        <View style={styles.columnEight}>
                                          <Icon
                                            style={styles.icon}
                                            name='chevron-down'
                                            color={Colors.purple} />
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                </View>

                                <View style={{paddingLeft: 10, paddingTop: 10, paddingRight: 10}}>
                                  <View style={{ paddingBottom: 10 }}>
                                      <Text style={{ }}>
                                         Status
                                      </Text>
                                  </View>
                                  <TouchableOpacity onPress={ handleModal }>
                                    <View style={[styles.paymentContainer, styles.shadowPropTwo]}>
                                      <View style={styles.rowTwo}>
                                        <View style={styles.columnSeven}>
                                          <Text style={styles.paymentText}>
                                            Unpaid
                                          </Text>
                                        </View>
                                        <View style={styles.columnEight}>
                                          <Icon
                                            style={styles.icon}
                                            name='chevron-down'
                                            color={Colors.purple} />
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                </View>

                                <View style={{paddingLeft: 10, paddingTop: 10, paddingRight: 10}}>
                                  <View style={{ paddingBottom: 10 }}>
                                      <Text style={{ }}>
                                         Time
                                      </Text>
                                  </View>
                                  <TouchableOpacity onPress={ handleModal }>
                                    <View style={[styles.paymentContainer, styles.shadowPropTwo]}>
                                      <View style={styles.rowTwo}>
                                        <View style={styles.columnSeven}>
                                          <Text style={styles.paymentText}>
                                            Days
                                          </Text>
                                        </View>
                                        <View style={styles.columnEight}>
                                          <Icon
                                            style={styles.icon}
                                            name='chevron-down'
                                            color={Colors.purple} />
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: 50 }}/>
                            </Modal.Body>
                        </Modal.Container>
                    </Modal>


            </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default TradesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false
    },
    rowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    bg: {

    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
    },
    columnOne: {
      width: '25%',
    },
    columnTwo: {
      width: '50%',
    },
    columnThree: {
      width: '25%',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    divider_container_two: {
      alignSelf: 'flex-end',
      padding: 15,
      includeFontPadding: false
    },
    details: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    tradeCard: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 5,
      backgroundColor: 'transparent',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    shadowPropTwo: {
      shadowColor: Colors.white,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 5
    },
    cancelText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.purple,
        fontSize: 20,
        padding: 20,
    },
    paymentContainer: {
      width: '100%',
      borderRadius: 30,
      borderWidth: 2,
      borderColor: Colors.purple,
      backgroundColor: Colors.white,
    },
    paymentText: {
      fontSize: 16,
      padding: 20,
      fontWeight: 'bold',
      color: Colors.purple,
    },
    icon: {
      fontSize: 20,
      padding: 20,
      textAlign: 'right',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    columnSeven: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnEight: {
      width: '50%',
      backgroundColor: 'transparent',
    },
})