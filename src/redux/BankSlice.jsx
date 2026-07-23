import { createSlice } from "@reduxjs/toolkit";

const BankSlice=createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        depositAction:(state,action)=>
        {
            state.balance+=action.payload
        },
        withdrawAction:(state,action)=>
        {
           if(action.payload<state.balance)
            {
            state.balance-=action.payload
            } 
            else
            {
                console.log("insufficent balance")
            }
        }
    }
})
export const {withdrawAction,depositAction}=BankSlice.actions
export default BankSlice.reducer