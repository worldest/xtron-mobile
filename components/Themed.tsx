/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, StyleSheet, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  let baseStyle = styles.medium;
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  (Array.isArray(style) ? style : [style]).forEach((style) => {
    if (style && style.fontWeight) {
      baseStyle = style.fontWeight === 'bold' ? styles.bold : styles.medium;
    }
  });
  return <DefaultText style={[{ color }, style, baseStyle, { fontWeight: 'normal' }]} {...otherProps}/>;
};

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'Quicksand_Bold',
  },
  light: {
    fontFamily: 'Quicksand_Light',
  },
  medium: {
    fontFamily: 'Quicksand_Book',
  },
});