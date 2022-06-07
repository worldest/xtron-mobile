/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          // New routes
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Wallet: {
            screens: {
              WalletScreen: 'wallet',
            },
          },
          Loan: {
            screens: {
              LoanScreen: 'loans',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'account',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
