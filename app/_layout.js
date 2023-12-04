import { Stack } from 'expo-router'
import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const  [fontloaded] = useFonts({
    DosisBold: require('../assets/fonts/Dosis/Dosis-Bold.ttf'),
    DosisSemiBold: require('../assets/fonts/Dosis/Dosis-SemiBold.ttf'),
    DosisMedium: require('../assets/fonts/Dosis/Dosis-Medium.ttf'),
    DosisRegular: require('../assets/fonts/Dosis/Dosis-Regular.ttf'),
    FredokaOneRegular: require('../assets/fonts/FredokaOne/FredokaOne-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontloaded])
  if (!fontloaded) return null 
  return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;