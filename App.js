import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import Login from './assignment/login';
import Register from './assignment/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Caytrong from './assignment/caytrong'
import CartScreen from './assignment/CartScreen';
import ListCayTrong from './assignment/listcaytrong';
import DetailScreen from './assignment/DetailScreen';
import PersonalDetails from './assignment/PersonalDetails'
import PaymentScreen from './assignment/PaymentScreen ';

const Stack = createNativeStackNavigator();
//blue@gmail.com
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Navigation' component={Navigation} />
        <Stack.Screen name='CartScreen' component={CartScreen} />
        <Stack.Screen name='Caytrong' component={Caytrong} />
        <Stack.Screen name='ListCayTrong' component={ListCayTrong}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen}/>
        <Stack.Screen name='PersonalDetails' component={PersonalDetails}/>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});