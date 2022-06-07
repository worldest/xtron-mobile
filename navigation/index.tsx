/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, AntDesign, Ionicons, Feather  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet, Pressable, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import HomeScreen from '../screens/Tabs/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// Added Routes
import LoginScreen from '../screens/Authentication/LoginScreen';
import CreateAccountScreen from '../screens/Authentication/CreateAccountScreen';
import IntroScreen from '../screens/Landing/IntroScreen';
import VerifyMobileScreen from '../screens/Authentication/VerifyMobileScreen';
import SetPinScreen from '../screens/Authentication/SetPinScreen';
import FingerPrintScreen from '../screens/Authentication/FingerPrintScreen';
import VerifyPinScreen from '../screens/Authentication/VerifyPinScreen';
import WalletScreen from '../screens/Tabs/WalletScreen';
import LoanScreen from '../screens/Tabs/LoanScreen';
import AccountScreen from '../screens/Tabs/AccountScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import TradesScreen from '../screens/Cryptocurrency/TradesScreen';
import OrderCompletedScreen from '../screens/Cryptocurrency/OrderCompletedScreen';
import OrderCanceledScreen from '../screens/Cryptocurrency/OrderCanceledScreen';
import PaymentMethodsScreen from '../screens/Payment/PaymentMethodsScreen';
import UpgradeScreen from '../screens/Others/UpgradeScreen';
import SettingsScreen from '../screens/Others/SettingsScreen';
import SecurityScreen from '../screens/Others/SecurityScreen';
import BiometricManagementScreen from '../screens/Others/BiometricManagementScreen';
import SupportScreen from '../screens/Others/SupportScreen';
import CouponsScreen from '../screens/Loan/CouponsScreen';
import InvalidCouponsScreen from '../screens/Loan/InvalidCouponsScreen';
import RequestLoanScreen from '../screens/Loan/RequestLoanScreen';
import DisbursementAccountScreen from '../screens/Loan/DisbursementAccountScreen';
import RepayLoanScreen from '../screens/Loan/RepayLoanScreen';
import LoanRepaymentMethodsScreen from '../screens/Payment/LoanRepaymentMethodsScreen copy';
import SendScreen from '../screens/Cryptocurrency/SendScreen';
import CurrencyDetailsScreen from '../screens/Cryptocurrency/CurrencyDetailsScreen';
import BuyOrdersScreen from '../screens/Cryptocurrency/BuyOrdersScreen';
import SellOrdersScreen from '../screens/Cryptocurrency/SellOrdersScreen';
import BuyCoinsScreen from '../screens/Cryptocurrency/BuyCoinsScreen';
import SellCoinsScreen from '../screens/Cryptocurrency/SellCoinsScreen';
import SellScreen from '../screens/Cryptocurrency/SellScreen';
import VerifyEmailScreen from '../screens/Authentication/VerifyEmailScreen';
import FingerPrintAuthenticationScreen from '../screens/Authentication/FingerPrintAuthenticationScreen';

const { width, height } = Dimensions.get('window');

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      contentStyle: {
          backgroundColor: 'transparent'
      } }}
      >
      <Stack.Screen name="Root" component={IntroScreen} options={{ headerShown: false }} />
      {/* ADDED ROOUTES */ }
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: true }} />
      <Stack.Screen name="VerifyMobile" component={VerifyMobileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SetPin" component={SetPinScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FingerPrint" component={FingerPrintScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyPin" component={VerifyPinScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Trades" component={TradesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OrderCanceled" component={OrderCanceledScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Upgrade" component={UpgradeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Security" component={SecurityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BiometricManagement" component={BiometricManagementScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Support" component={SupportScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Coupons" component={CouponsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InvalidCoupons" component={InvalidCouponsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RequestLoan" component={RequestLoanScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DisbursementAccount" component={DisbursementAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RepayLoan" component={RepayLoanScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoanRepaymentMethods" component={LoanRepaymentMethodsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Send" component={SendScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CurrencyDetails" component={CurrencyDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BuyOrders" component={BuyOrdersScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SellOrders" component={SellOrdersScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BuyCoins" component={BuyCoinsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SellCoins" component={SellCoinsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sell" component={SellScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FingerPrintAuthentication" component={FingerPrintAuthenticationScreen} options={{ headerShown: false }} />
      

      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowRadius: 21,
            elevation: 24,
            shadowColor: '#000',
            shadowOpacity: 1,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            borderTopColor: Colors.white,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 5,
            width: '100%',
            height: 60,
            zIndex: 0,
        },
        header: () => null,
        tabBarActiveTintColor: Colors.blue,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Ionicons  name="wallet-outline" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Loan"
        component={LoanScreen}
        options={{
          title: 'Loan',
          tabBarIcon: ({ color }) => <Ionicons  name="cash-outline" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
