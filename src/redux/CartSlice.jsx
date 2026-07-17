import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:
    {
        addtoCart:(state,action)=>
        {
            console.log("state..",state.cart);
            console.log(action)
        }
    }
})

export default CartSlice.reducer;