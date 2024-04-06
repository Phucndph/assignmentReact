import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{tang, giam} from './store'
const Dem = () => {
    const count=useSelector(state=>state.dem);
    const dispath=useDispatch();
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Dem:{count}</Text>
        <Button title="Tang" onPress={()=>dispath(tang())}/>
        <Button title="Giam" onPress={()=>dispath(giam())}/> 
    </View>
  );
}

export default Dem

const styles = StyleSheet.create({})