import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import SmallButton from '../buttons/SmallButton';
import React from 'react';

export const CouponCard = (props: any) => {
  const use_btn = {
    text: 'Use',
  }  
  return (
    <View style={[styles.mainContainer]}>
        <View style={[styles.container, styles.shadowProp]}>
            <View style={styles.columnOne}>
                <Text style={[styles.boldPercent, { color: props.text_color || Colors.purple }]}>
                    5%
                </Text>
                <Text style={[styles.smallPercent, { color: props.text_color || Colors.purple }]}>
                    Discount
                </Text>
            </View>
            <View style={styles.columnTwo}>

            <ImageBackground source={require('../../assets/images/xtron.png')} resizeMode="cover" style={styles.bg}>

                <Text style={[styles.description, { color: props.text_color || Colors.black }, { backgroundColor: 'transparent' }]}>
                    All loans are available
                    {'\n'}Outstanding coupons
                </Text>

            </ImageBackground>
            
            </View>
        </View>

        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <View style={[styles.columnThree, { backgroundColor: props.bg_color || '#fbebfa' }]}>
                <View style={styles.columnFour}>
                    <Text style={[styles.small, { color: props.white || Colors.purple }]}>
                        Validity Period: 02/11/21 - 08/11/21
                    </Text>
                </View>
                <View style={styles.columnFive}>
                  <View style={styles.btn_padding}>
                    <SmallButton bg_color={props.text_color} text={use_btn.text}></SmallButton>
                  </View>
                </View>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
  },
  bg: {
    height: 120,
  },
  container: {
    flex: 1,  
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 10
  },
  columnOne: {
      width: '40%',
      includeFontPadding: false,
      backgroundColor: 'transparent',
  },
  columnTwo: {
      width: '60%',
      includeFontPadding: false,
      backgroundColor: 'transparent',
  },
  boldPercent: {
    paddingTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  smallPercent: {
    textAlign: 'center',
    paddingBottom: 40,
    fontSize: 12,
  },
  description: {
    textAlign: 'left',
    paddingTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnThree: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  columnFour: {
      width: '75%',
      includeFontPadding: false,
      backgroundColor: 'transparent',
  },
  columnFive: {
      width: '25%',
      includeFontPadding: false,
      backgroundColor: 'transparent',
  },
  small: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      fontSize: 12,
      fontWeight: 'bold',
  },
  btn_padding: {
    paddingTop: 5,
    paddingRight: 20,
    backgroundColor: 'transparent',
  }
})