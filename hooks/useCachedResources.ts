import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from "@use-expo/font";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Quicksand_Bold_Oblique': require('../assets/fonts/Quicksand_Bold_Oblique.otf'),
          'Quicksand_Bold': require('../assets/fonts/Quicksand_Bold.otf'),
          'Quicksand_Book_Oblique': require('../assets/fonts/Quicksand_Book_Oblique.otf'),
          'Quicksand_Book': require('../assets/fonts/Quicksand_Book.otf'),
          'Quicksand_Dash': require('../assets/fonts/Quicksand_Dash.otf'),
          'Quicksand_Light_Oblique': require('../assets/fonts/Quicksand_Light_Oblique.otf'),
          'Quicksand_Light': require('../assets/fonts/Quicksand_Light.otf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
