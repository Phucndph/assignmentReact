//b2
import { createReducer } from "@reduxjs/toolkit";
import { addItem,removeItem } from "./actions";
//khoi tao trang thai
const initialState={items:[]};
//tao reducer (khi click se goi den)
const cartReducer=createReducer(initialState,builder=>{
    builder
    .addCase(addItem,(state,action)=>{
        const tontaiItemIndex=state.items.findIndex(
            item=>item.id===action.payload.id
        );
        if(tontaiItemIndex !== -1){
            state.items[tontaiItemIndex].quantity++; //
        }
        else {
            state.items.push({...action.payload,quantity: 1}) ;  
        }
    })
    .addCase(removeItem,(state,action)=>{
        const tontaiItemIndex=state.items.findIndex(
            item=>item.id===action.payload.id
        );
        if(tontaiItemIndex !== -1){
            state.items[tontaiItemIndex].quantity--;//giam so luong di 1
        }
        //so luong bang 0 thi xoa khoi gio hang
        if(state.items[tontaiItemIndex].quantity===0){
            state.items.splice(tontaiItemIndex,1);
        }
    });
});
export default cartReducer;