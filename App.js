/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={{color: "#fff", fontWeight: "bold"}}>Hello world!</Text>
          <Text style={{color: "#fff", fontWeight: "bold"}}>My Name is Ahmad Supriyanto!</Text>
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  greetingContainer: {
    backgroundColor: '#008577',
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
