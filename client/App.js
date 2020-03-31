import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

fetch('http://localhost:3000/comparisons/random')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
