import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const fetchUserData=createAsyncThunk("content/fetchData",async()=>
{
    const res=await axios.get(`https://node5.onrender.com/user/user/`)
    return res.data.data
})
const ContentSlice=createSlice({
    name:"content",
    initialState:{
        data:[],
        error:null,
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>
    {
        builder.addCase(fetchUserData.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchUserData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        })
        builder.addCase(fetchUserData.rejected,(state,action)=>
        {
            state.loading=false
            state.error=action.error.message
        })
    }
})
export default ContentSlice.reducer