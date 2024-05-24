import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen'; // Corrected import path
import { Provider } from 'react-redux';
import Store from './Store';

export default function App() {
  return (
    <Provider store={Store}>
      <HomeScreen />
      <StatusBar style="auto" />
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
