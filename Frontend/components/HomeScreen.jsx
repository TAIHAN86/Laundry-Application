// Import necessary libraries
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Define the HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

// Export the component
export default HomeScreen;
