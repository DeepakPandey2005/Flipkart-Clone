import { createSlice } from "@reduxjs/toolkit"

const fetchSlice =createSlice({
    name:"fetchStatus",
    initialState:{
        fetchdone:false,
        currfetch:false
    },
    reducers:{
      markfetchdone:(state)=>{
         state.fetchdone=true
      },
      markfetchstart:(state)=>{
         state.currfetch=true
      },
      markfetchfinished:(state)=>{
         state.currfetch=false

      }
    }
    })

    export const fetchAction=fetchSlice.actions

    export default fetchSlice