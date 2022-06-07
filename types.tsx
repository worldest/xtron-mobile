/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  
  // Added Tab Routes
  Home: undefined;
  Wallet: undefined;
  Loan: undefined;
  Account: undefined;

  // Added Screen Routes
  CreateAccount: undefined;
  Login: undefined;
  Intro: undefined;
  VerifyMobile: undefined;
  SetPin: undefined;
  FingerPrint: undefined;
  VerifyPin: undefined;
  Tabs: undefined;
  EditProfile: undefined;
  Trades: undefined;
  PaymentMethods: undefined;
  Upgrade: undefined;
  Settings: undefined;
  Support: undefined;
  OrderCompleted: undefined;
  OrderCanceled: undefined;
  Security: undefined;
  BiometricManagement: undefined;
  Coupons: undefined;
  RequestLoan: undefined;
  RepayLoan: undefined;
  InvalidCoupons: undefined;
  DisbursementAccount: undefined;
  LoanRepaymentMethods: undefined;
  Send: undefined;
  CurrencyDetails: undefined;
  BuyOrders: undefined;
  SellOrders: undefined;
  BuyCoins: undefined;
  SellCoins: undefined;
  Sell: undefined;
  VerifyEmail: undefined;
  FingerPrintAuthentication: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  // New routes
  Home: undefined;
  Wallet: undefined;
  Loan: undefined;
  Account: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
