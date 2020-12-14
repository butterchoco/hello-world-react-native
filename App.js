import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={{color: "#fff", fontWeight: "bold"}}>Hello world!</Text>
        <Text style={{color: "#fff", fontWeight: "bold"}}>My Name is Ahmad Supriyanto!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  greetingContainer: {
    backgroundColor: '#008577',
    padding: "10px",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center"
  }
});
