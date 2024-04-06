import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../assignment/HomeScreen';
import CartScreen from '../assignment/CartScreen';
import FavoritesScreen from '../assignment/FavoritesScreen';
import PersonalDetails from '../assignment/PersonalDetails';
import Search from '../assignment/Search'



const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#D17842',
      tabBarInactiveBackgroundColor: 'black',
      tabBarActiveBackgroundColor: 'black',
    }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorhome.png')} tintColor={color} />
        }}
        name=" "
        component={HomeScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorsearch.png')} tintColor={color} />
        }}
        name="  "
        component={Search} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectornotice.png')} tintColor={color} />
        }}
        name="    "
        component={FavoritesScreen} />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Image source={require('../image/Vectorlocation.png')} tintColor={color} />
        }}
        name="     "
        component={PersonalDetails} />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})