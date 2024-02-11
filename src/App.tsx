import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppwriteProvider} from './appwrite/AppwriteContext';
import {Router} from './routes/Router';

export type RootStackPramList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();
const App = () => {
  return (
    <>
      {/* <AppwriteProvider> */}
      <Router />
      {/* </AppwriteProvider> */}
    </>
  );
};

export default App;
