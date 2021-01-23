import React, { useState } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { AppDrawer } from "./routes/draw"

const getFont = () => {
  return Font.loadAsync({
    "nunito-reg": require('./assets/fonts/Nunito-Regular.ttf'),
    "nunito-bold": require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const  [fontloaded, setFontloaded] = useState(false);
  if (fontloaded) {
    return (
      // <Home />
      <AppDrawer />
    )
  }else {
    return (
      <AppLoading
      startAsync={getFont}
      onFinish={() => setFontloaded(true)}
      onError={() => console.log("error")}
    />
    )
  }
}

