import React,{ useEffect, useState } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-rapi-ui';

export default function App() {
  const [username, setUsername] = useState('');
  const [logged_in, setLoggedIn] = useState(false);
  
  var masterUsername = 'admin';
  var masterPassword = 'admin';
  useEffect(() => {
    cekLogin();
  }, []);

  const saveLogin = async () => {
    try {
      if(username == masterUsername)
      {
        if(password == masterPassword)
        {
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('logged_in', true); 
        }else
        {
          await AsyncStorage.setItem('logged_in', false); 
        }
      }else
      {
          await AsyncStorage.setItem('logged_in', false); 
      }
      
    } catch (e) {
     console.log('error');
    }
  };

  const cekLogin = async () => {
    try {
      const x = await AsyncStorage.getItem('username');
      const y = await AsyncStorage.getItem('logged_in');
      setUsername(x);
      setLoggedIn(y);
    } catch (e) {
      console.log(e);
    }
  };

  function MyComponent({ isLoggedIn }) {
  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <AppNavigator />
      ) : (
        <Button style={{marginTop:300}} status="warning" text="Login"  />
      )}
    </ThemeProvider>
  );
}

  return (
    <MyComponent data={logged_in} />
  );
}
