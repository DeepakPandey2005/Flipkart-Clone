import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemslice"
import fetchSlice from "./fetch";
import CartSlice from "./cartslice";

const itemStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchSlice.reducer,
        cart:CartSlice.reducer
    }
})

export default itemStore;