import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ListBuySellCard = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>

      <View style={styles.columnOne}>
          <Image style={styles.avatar} source={require('../../assets/images/btc.jpg')} />
      </View>
      <View style={styles.columnTwo}>
          <Text style={styles.title}>
            BTC
          </Text>
          <Text style={styles.title_two}>
           $41,850.98/BTC
          </Text>
      </View>
      <View style={styles.columnThree}>

        <TouchableOpacity onPress={() => navigation.navigate('BuyOrders', 
        {
          status: 'buy'
        }
        )}>
          <View style={styles.small_btn}>
            <Text style={styles.small_btn_text}>
              Buy
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 3 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('SellOrders',
        {
          status: 'sell'
        }
        )}>
        <View style={styles.small_btn_two}>
          <Text style={styles.small_btn_text_two}>
            Sell
          </Text>
        </View>
        </TouchableOpacity>

      </View>
      <View style={styles.columnFour}>
          <Text style={styles.smallTextTop}>
           0.00 BTC
          </Text>
          <Text style={styles.smallTextBottom}>
           0.00 USD
          </Text>
      </View>

    </View>
  );
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
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: '20%',
  },
  columnTwo: {
    alignSelf: 'center',
    width: '25%',
  },
  columnThree: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: '30%',
  },
  columnFour: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: '25%',
  },
  title: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  title_two: {
    textAlign: 'left',
    color: Colors.black,
    fontSize: 11
  },
  avatar: {
    borderRadius: 30,
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  iconOne: {
    fontSize: 15,
    padding: 0,
    color: Colors.green,
    includeFontPadding: false
  },
  smallTextTop: {
    fontSize: 14,
    textAlign: 'right',
    paddingTop: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  smallTextBottom: {
    textAlign: 'right',
    paddingBottom: 20,
    paddingRight: 20,
    color: Colors.black,
    fontSize: 12
  },
  small_btn: {
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: Colors.purple,
  },
  small_btn_text: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: Colors.white,
  },
  small_btn_two: {
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: Colors.gray,
  },
  small_btn_text_two: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: Colors.black,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 10
  },
});