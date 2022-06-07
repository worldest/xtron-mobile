import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import AvatarWithName from '../avatars/AvatarWithName';

export const TradeCard = (props: any) => {
  const user = {
    name: 'Johnny',
    text_color: Colors.blue,
  }
  return (
      <View style={[styles.container, styles.shadowProp]}>

        <View style={styles.columnOne}>
            <View style={styles.avatarContainer}>
                <AvatarWithName text_color={user.text_color} name={user.name}></AvatarWithName>
            </View>
            <Text style={styles.textContainer}>
                Price <Text style={{ fontWeight: 'bold', color: Colors.black }}>N24,180,000.00</Text>
            </Text>
            <Text style={styles.textContainer}>
                Quantity <Text style={{ fontWeight: 'bold', color: Colors.black }}>0.003458686</Text>
            </Text>
            {
              props.status == 'completed'
              ? <Text style={styles.textContainerTwo}>
                  Order Completed &nbsp; <Icon
                                          style={styles.iconOne}
                                          name='angle-right'/>
                </Text>
              : <Text style={styles.textContainerTwo}>
                  Order Canceled &nbsp; <Icon
                                          style={styles.iconOne}
                                          name='angle-right'/>
                </Text>
            }
        </View>
        <View style={styles.columnTwo}>
            <Text style={styles.rightTextContainer}>
                Buy <Text>BTC</Text>
            </Text>
            <Text style={styles.rightTextContainerTwo}>
              21/11/2020 &nbsp; 11:50:04
            </Text>
            <Text style={styles.amount}>
              N29,000.00
            </Text>
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
        backgroundColor: Colors.white,
        includeFontPadding: false
    },
    columnOne: {
      width: '60%',
      backgroundColor: 'transparent',
    },
    columnTwo: {
      width: '40%',
      alignItems: 'flex-end',
      backgroundColor: 'transparent',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
    textContainer: {
        paddingLeft: 20,
    },
    avatarContainer: {
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    iconOne: {
      fontSize: 15,
    },
    textContainerTwo: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingBottom: 20,
      color: Colors.blue,
    },
    rightTextContainer: {
      color: Colors.purple,
      fontWeight: 'bold',
      fontSize: 16,
      paddingTop: 20,
      paddingRight: 20,
    },
    rightTextContainerTwo: {
      color: Colors.black,
      paddingTop: 20,
      paddingRight: 20,
      fontSize: 12,
    },
    amount: {
      fontWeight: 'bold',
      paddingRight: 20,
    }
})