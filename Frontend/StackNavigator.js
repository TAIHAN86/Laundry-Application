import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './Screen/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PickUpScreen from './Screen/PickUpScreen';
import CartScreen from './Screen/CartScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfilScreen from './Screen/ProfilScreen';
import OrderScreen from './Screen/OrderScreen';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PickUp" component={PickUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfilScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})