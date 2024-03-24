import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './assignment/login';
import Register from './assignment/Register';
import HomeScreen from './assignment/HomeScreen';
import Setting from './assignment/Setting';
import Navigation from './navigation/Navigation';
import ContactForm from './assignment/ContactForm';
import BeanDetailsScreen from './assignment/BeanDetailsScreen';
import CoffeeDetailsScreen from './assignment/CoffeeDetailsScreen';
import PersonalDetails from './assignment/PersonalDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Navigation' component={Navigation}/> 
        <Stack.Screen name='Setting' component={Setting}/>
        <Stack.Screen name='ContactForm' component={ContactForm}/>
        <Stack.Screen name='BeanDetailsScreen' component={BeanDetailsScreen}/>
        <Stack.Screen name='CoffeeDetailsScreen' component={CoffeeDetailsScreen}/>    
        <Stack.Screen name='PersonalDetails' component={PersonalDetails}/> 
      </Stack.Navigator> */}
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});