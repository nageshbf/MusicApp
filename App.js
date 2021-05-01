/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import RootNavigator from './src/Navigation/RootNavigator';

const App = () => {

  const backgroundStyle = {
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <RootNavigator />
    </SafeAreaView>
  );
};
export default App;
