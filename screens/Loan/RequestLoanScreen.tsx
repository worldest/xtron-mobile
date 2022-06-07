import React, { useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/buttons/Button';
import NavigationButton from '../../components/buttons/NavigationButton';
import SmallTransparentButton from '../../components/buttons/SmallTransparentButton';
import { CouponCard } from '../../components/cards/CouponCard';
import { Modal } from '../../components/modals/modal';
import { View, Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');

const RequestLoanScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);  
    const navigation_button = {
      icon_name: 'angle-left'
    }
    const durations = [
        {
            id: 1,
            duration: '7 Days'
        },
        {
            id: 2,
            duration: '14 Days'
        },
        {
            id: 3,
            duration: '21 Days'
        },
        {
            id: 4,
            duration: '28 Days'
        },
        {
            id: 5,
            duration: '35 Days'
        },
        {
            id: 6,
            duration: '60 Days'
        },
        {
            id: 7,
            duration: '90 Days'
        },
    ]
    const coupons_btn = {
        text: 'Available: 0',
        border_color: Colors.grey,
        icon: 'chevron-right',
        font_color: Colors.black,
        font_size: 14,
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>

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
                            Request Loan
                        </Text>
                        </View>
                        <View style={styles.columnThree}>

                        </View>
                        
                    </View>

                </ImageBackground>

                <View style={{ marginTop: 20 }}/>

                    <View style={styles.rowTwo}>
                        <Text style={styles.small_title}>
                            Loan Amount
                        </Text>
                        <View style={styles.rowTwo}>
                            <TextInput
                                placeholderTextColor={ Colors.purple }
                                style={styles.text_input}
                                value={'N25,000.00'}
                                placeholder={'N25,000.00'}
                                />
                        </View>
                    </View>
                    <View style={[styles.divider_container_two]}>
                        <View
                            style={styles.divider}
                        />
                    </View>

                    <View style={[ {paddingTop: 20, paddingLeft: 20, paddingRight: 20} ]}>
                        <View style={styles.durations}>
                            <View style={styles.rowTwo}>
                                <Text style={styles.small_title_two}>
                                    Select Loan Duration
                                </Text>
                                <View style={styles.rowThree}>
                                    {
                                        durations.map(entry =>
                                            <View key={entry.id} style={styles.btnRow}>
                                                <SmallTransparentButton text={entry.duration}></SmallTransparentButton> 
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row, { paddingRight: 20 }]}>
                        <View style={styles.columnEight}>

                        </View>
                        <View style={styles.columnNine}>
                            <View style={styles.columnSix}>
                                <Text style={styles.coupons}>
                                    Coupons
                                </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
                                    <SmallTransparentButton font_color={coupons_btn.font_color} font_size={coupons_btn.font_size} icon={coupons_btn.icon} border_color={coupons_btn.border_color} text={coupons_btn.text}></SmallTransparentButton>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.divider_container_two]}>
                            <View
                                style={styles.dividerTwo}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Loan Purpose
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                    <TouchableOpacity onPress={ handleModal }>
                                        <Icon
                                            style={styles.iconOne}
                                            name='chevron-right'/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Interest
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                   <Text style={styles.bodyTextTwo}>
                                       N0.00
                                   </Text>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Total Due
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                   <Text style={styles.bodyTextTwo}>
                                       N0.00
                                   </Text>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Due Date
                                    </Text>
                                </View>
                                <View style={styles.columnFive}>
                                   <Text style={styles.bodyTextTwo}>
                                       _ _ / _ _ / _ _
                                   </Text>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                            <View style={styles.row}>
                                <View style={styles.columnFour}>
                                    <Text style={styles.bodyText}>
                                        Disbursement Account
                                    </Text>
                                </View>
                                <View style={styles.columnSeven}>
                                    <TouchableOpacity onPress={() => navigation.navigate('DisbursementAccount')}>
                                        <View style={styles.columnSix}>
                                            <Text style={styles.wallet}>
                                                Xtron Wallet
                                            </Text>
                                            <Icon
                                                style={styles.iconOne}
                                                name='chevron-right'/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={styles.dividerThree}
                            />
                        </View>
                    </View>

                    <View style={{marginTop: 30}}/>

                    <TouchableOpacity onPress={() => navigation.navigate('Loan', {
                        status: true,
                    })}>
                        <Button button_name={'Request'}></Button>
                    </TouchableOpacity>
                
                    <View style={{marginTop: 30}}/>

                    
                    <Modal isVisible={isModalVisible}>
                        <Modal.Container>
                            <Modal.Header>
                                <TouchableOpacity onPress={ handleModal }>
                                    <Text style={styles.cancelText}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </Modal.Header>
                            <Modal.Body>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Hospital
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Pharmacy
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Rent
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Educational
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Agric
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Auto
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Salary Advance
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                    <Text style={styles.listText}>
                                        Personal
                                    </Text>
                                <View style={{ borderTopColor: Colors.grey, borderTopWidth: 1 }}/>
                                <Text style={styles.listText}>
                                        Others
                                </Text>
                                <View style={{ marginTop: 20 }}/>
                            </Modal.Body>
                        </Modal.Container>
                    </Modal>


                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestLoanScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      includeFontPadding: false,
      backgroundColor: 'transparent',
    },
    rowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: 'transparent',
    },
    rowTwo: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 10,
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
    },
    rowThree: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      textAlignVertical: 'center',
      paddingBottom: 30,
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 40,
      backgroundColor: 'transparent',
    },
    btnRow: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: 'transparent',
    },
    columnOne: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    columnThree: {
      width: '20%',
      backgroundColor: 'transparent',
    },
    columnFour: {
        width: '50%',
        backgroundColor: 'transparent',
    },
    columnFive: {
        width: '50%',
        backgroundColor: 'transparent',
    },
    columnEight: {
        width: '20%',
        backgroundColor: 'transparent',
    },
    columnNine: {
        width: '80%',
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    columnSix: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    columnSeven: {
        width: '50%',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
    },
    divider_container: {
      padding: 15,
      includeFontPadding: false
    },
    details: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    small_title: {
        fontSize: 12,
        paddingLeft: 20,
    },
    small_title_two: {
        fontSize: 12,
        paddingTop: 10,
        paddingLeft: 25,
    },
    text_input: {
      paddingStart: 20,
      paddingEnd: 20,
      fontSize: 50,
      width: '100%',
      marginTop: -10,
      fontWeight: 'bold',
      color: Colors.purple,
      includeFontPadding: false
    },
    divider: {
        borderBottomColor: Colors.purple,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    dividerTwo: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: 2,
        includeFontPadding: false
    },
    dividerThree: {
        borderTopColor: Colors.grey,
        borderTopWidth: 2,
        includeFontPadding: false
    },
    divider_container_two: {
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    durations: {
        borderRadius: 30,
        borderColor: Colors.purple,
        borderWidth: 2,
    },
    iconOne: {
        textAlign: 'right',
        fontSize: 25,
        color: Colors.black,
    },
    bodyText: {
        fontSize: 14,
        alignContent: 'center',
        alignItems: 'center',
    },
    bodyTextTwo: {
        fontSize: 16,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    wallet: {
        fontSize: 14,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingRight: 10,
        marginTop: 2,
        fontWeight: 'bold',
    },
    coupons: {
        fontSize: 14,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingRight: 10,
        marginTop: 5,
    },
    bg: {

    },
    cancelText: {
        fontWeight: 'bold',
        color: Colors.purple,
        fontSize: 20,
        padding: 20,
    },
    listText: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 15,
    }
})

