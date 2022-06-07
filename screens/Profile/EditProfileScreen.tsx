import { Dimensions, AsyncStorage, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Button from '../../components/buttons/Button';
import React from 'react';
import NavigationButton from '../../components/buttons/NavigationButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackedInputField from '../../components/inputs/StackedInputField';
const { width, height } = Dimensions.get('window');
import { useState, useEffect } from 'react';

const EditProfileScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
    const [data, setData] = useState({
        user: {
        wallet: 0,
        fullname: "",
        ID: "" ,
        phone: "",
        email: ""
        }
    });
    useEffect(() => {
        AsyncStorage.getItem("userId").then((user) => {
          
        if(user !== null && user !== undefined){
            fetch(`http://146.190.27.11/User/getUser.php?id=${user}`, {
            method: "GET"
            })
            .then(response => response.json())
            .then((datas) => {
            console.log(datas)
            setFullname(datas.user.fullname);
            setData(datas);
            })
            .catch((error) => {
    
            })
        }
        })
    }, [])
  const navigation_button = {
    icon_name: 'angle-left'
  }
  var personal_details_fields = [
    {
      key: 1,
      field_name: 'Full Name',
      placeholder: data.user.fullname,
    },
    {
      key: 4,
      field_name: 'Date of Birth',
      placeholder: '(DD/MM/YYYY)',
      icon_name: 'calendar',
    },
    {
      key: 5,
      field_name: 'BVN Number',
      placeholder: '1234567890',
    }
  ]
  var contact_details_fields = [
    {
      key: 1,
      field_name: 'Email',
      placeholder: data.user.email,
    },
    {
      key: 2,
      field_name: 'Phone Number',
      placeholder: data.user.phone,
    },
    {
      key: 3,
      field_name: 'Location',
      placeholder: 'e.g No. 1234, Street Name, City, State',
    }
  ]
  var income_details_fields = [
    {
      key: 1,
      field_name: 'Employment Status',
      placeholder: 'Employed',
      icon_name: 'chevron-down'
    },
    {
      key: 2,
      field_name: 'Monthly Income',
      placeholder: 'N 000,000.00',
    }
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

        <View style={{  }}/>

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
                My Details
            </Text>
          </View>
          <View style={styles.columnThree}>
            
          </View>
            
          </View>

          </ImageBackground>

          <View style={{ marginTop: 20 }}/>

          <View style={styles.row}>
                <Text style={styles.heading}>
                  PERSONAL DETAILS
                </Text>
          </View>
          <View style={[styles.divider_container_two]}>
              <View
                  style={styles.divider}
              />
          </View>
          
          <View style={{marginTop: 20}}/>

                {/* Personal details */}
                {
                  personal_details_fields.map(entry =>
                    <StackedInputField key={entry.key} field_name={entry.field_name} placeholder={entry.placeholder} icon_name={entry.icon_name} ></StackedInputField>
                  )
                }

          <View style={{marginTop: 30}}/>

          <View style={styles.row}>
              <Text style={styles.heading}>
                  CONTACT DETAILS
              </Text>
          </View>
          <View style={[styles.divider_container_two]}>
              <View
                  style={styles.divider}
              />
          </View>

          <View style={{marginTop: 20}}/>

                {/* Contact details */}
                {
                  contact_details_fields.map(entry =>
                    <StackedInputField key={entry.key} field_name={entry.field_name} placeholder={entry.placeholder} icon_name={entry.icon_name} ></StackedInputField>
                  )
                }


          <View style={{marginTop: 30}}/>

          <View style={styles.row}>
              <Text style={styles.heading}>
                  INCOME DETAILS
              </Text>
          </View>
          <View style={[styles.divider_container_two]}>
              <View
                  style={styles.divider}
              />
          </View>

          <View style={{marginTop: 20}}/>

                {/* Income details */}
                {
                  income_details_fields.map(entry =>
                    <StackedInputField key={entry.key} field_name={entry.field_name} placeholder={entry.placeholder} icon_name={entry.icon_name} ></StackedInputField>
                  )
                }

          <View style={{marginTop: 25}}/>

          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <View style={[styles.title_container]}>
                    <View style={[styles.signOutContainer, styles.shadowPropButton]}>
                        <Text style={styles.signOutText}>
                            Save
                        </Text> 
                    </View>
                </View>
          </TouchableOpacity>


          <View style={{marginTop: 40}}/>

        </View>
      </ScrollView>
    </SafeAreaView>


  )
}

export default EditProfileScreen;

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
      alignItems: 'flex-start'
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
    details: {
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 20,
      color: Colors.blue, 
    },
    heading: {
      fontWeight: 'bold',
      color: Colors.black,
      fontSize: 14,
      paddingLeft: 40,
      paddingTop: 20,
    },
    divider: {
        borderBottomColor: Colors.black,
        borderBottomWidth: 1,
        includeFontPadding: false
    },
    divider_container_two: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        includeFontPadding: false
    },
    title_container: { 
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        alignContent: 'center'
    },
    signOutContainer: {
        backgroundColor: Colors.blue,
        borderRadius: 30,
        width: 150,
    },
    signOutText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 16,
        padding: 10,
    },
    shadowPropButton: {
      shadowColor: Colors.purple,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,  
      elevation: 10
    },
})