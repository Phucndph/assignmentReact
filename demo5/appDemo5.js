import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Dem from './dem'
const AppDemo5 = () => {
  return (
    <Provider store={store}>
        <Dem/>
    </Provider>
  )
}

export default AppDemo5

const styles = StyleSheet.create({})