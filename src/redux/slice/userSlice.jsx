import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:"User",
    initialState:{
        name:"Rakesh",
        age:"55",
        area:"chennai",
        role:[],
      
    },
    reducers:{
        updateRole:(state,{payload})=>{
            state.role = payload;
            state.age = payload[0]
        }
    }
})

export const {updateRole} = userSlice.actions;

export const userReducer =  userSlice.reducer;




