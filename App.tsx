import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView ,View,Switch } from 'react-native';
import { ThemeContext } from './context/themcontext';
import { myColors } from './styles/mycolors';
import Keyboard from './components/keyboard';
import Button from './components/button';
export default function App() {
   const [theme,settheme]=useState("light")


  return ( 
    <ThemeContext.Provider value={theme}>
    <SafeAreaView  style={theme==="light"? styles.container:styles.container2} >
      
      <Switch
        style={styles.switch}
        value={theme!=="light"}
        onChange={()=>{
          settheme(theme==='light'?'dark':"light")
        }}
      ></Switch>
      <Keyboard></Keyboard>

      <StatusBar style="auto" />
    </SafeAreaView>
    </ThemeContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    backgroundColor: myColors.dark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switch:{
    marginTop:75,
    width:45,
    transform:[{ scaleX: 1.7 }, { scaleY: 1.7 }]
  }
});
