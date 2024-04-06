//TAO CUOI CUNG
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ViewApp from "./ViewApp";
const AppDemo51=()=>{
    return(
        <Provider store={store}>
            <ViewApp/>
        </Provider>
    );
}
export default AppDemo51;