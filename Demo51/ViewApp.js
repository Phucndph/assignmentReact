//TAO THU 4
import React from "react";
import { Text,View,Button } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { tang,giam } from "./actions";
const ViewApp=()=>{
    const count=useSelector(state=>state.dem);
    const dispatch=useDispatch();
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Dem: {count}</Text>
            <Button title="Tang" onPress={()=>dispatch(tang())} />
            <Button title="Giam" onPress={()=>dispatch(giam())} />
        </View>
    );
}
export default ViewApp;