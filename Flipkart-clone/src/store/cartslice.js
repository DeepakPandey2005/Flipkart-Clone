import { createSlice } from "@reduxjs/toolkit"
const CartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);

        },
        remove:(state,action)=>{
            return state.filter(itemId=> itemId !== action.payload)

        },

    }
    })

    export const cartAction=CartSlice.actions

    export default CartSlice