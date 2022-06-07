import React from 'react';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import FilterButton from '../../components/buttons/FilterButton';
import NavigationButton from '../../components/buttons/NavigationButton';
import TransparentButton from '../../components/buttons/TransparentButton';
import { OrderCard } from '../../components/cards/OrderCard';
import { TradeCard } from '../../components/cards/TradeCard';
import InputField from '../../components/inputs/InputField';
import InputWithIconField from '../../components/inputs/InputWithIconField';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { FloatingAction } from "react-native-floating-action";
import { Modal } from '../../components/modals/modal';
const { width, height } = Dimensions.get('window');

function goToSellScreen(navigation) {
  return navigation.navigate('Sell')
}

const SellOrdersScreen = ({ navigation, route }) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);  
    var params = route.params;
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const filter_button = {
      icon_name: 'filter'
    }
    const actions = [
      {
        name: "sell_order",
        icon: require("../../assets/svg/add-circle-outline.svg"),
      },
    ];
    return (
            <View style={styles.container}>
        
            <SafeAreaView></SafeAreaView>

            <View style={{ marginTop: 40 }}/>

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
                        Orders
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

                <View style={{ marginTop: 20 }}/>

                <View style={[styles.columnFour, { backgroundColor: Colors.white }]}>

                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center', alignSelf: 'center' }}>
                  </View>
                  <View style={{ width: '50%', backgroundColor: Colors.white, alignItems: 'center' }}>
                    <View style={styles.currency}>
                      <Text style={styles.currencyText}>
                        USD&nbsp;<Icon
                                  style={styles.iconOne}
                                  name='caret-down'
                                  color={Colors.white} />
                      </Text>
                    </View>
                  </View>
                  <View style={{ width: '25%', backgroundColor: Colors.white, alignItems: 'center' }}>
                  </View>

                </View>
                
                <View style={{ paddingTop: 20 }}/>

                <ScrollView>

                  <View style={styles.cardsRow}>

                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.tradeCard]}>
                      <TouchableOpacity onPress={ () => {
                            navigation.navigate('SellCoins')
                          }}>
                        <OrderCard status={ params.status }></OrderCard>
                      </TouchableOpacity>
                    </View>

                  </View>

                  <View style={{ paddingTop: 20 }}/>

                </ScrollView>

                  <FloatingAction
                      overlayColor={'transparent'}
                      onPressMain={() => {
                      goToSellScreen(navigation)
                    }}
                  />


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
    )
}

export default SellOrdersScreen;

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
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    cardsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 10,
    },
    columnOne: {
      width: '25%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '50%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '25%',
      backgroundColor: 'transparent',
    },
    divider_container: {
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
    divider_container_two: {
      alignSelf: 'flex-end',
      padding: 15,
      includeFontPadding: false
    },
    columnFour: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    currency: {
      borderRadius: 30,
      backgroundColor: Colors.purple,
    },
    currencyText: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 14,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
    iconOne: {
      fontSize: 15,
      padding: 0,
      color: Colors.white,
      includeFontPadding: false
    },
    tradeCard: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 5,
      backgroundColor: 'transparent',
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
    shadowPropTwo: {
      shadowColor: Colors.white,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 5
    },
})
