import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:
    {
           //action
        //2 prams
        //state == initialState
        //action --1)type,payload
        //type -> action call ---> switch case..
        //type --> name/actionname  --> cart/addtoCart
        //payload object --->
        addtoCart:(state,action)=>
        {
            console.log("state..",state.cart);
            console.log(action);
        
            var foundObject=state.cart.find((p)=>p.id===action.payload.id)
            if(foundObject)
            {
                foundObject.qty++;
            }
            else
            {
                  action.payload.qty = 1;
                state.cart.push(
                    action.payload
                );
            }
            
        },
        removeFromCart:(state,action)=>
        {

            console.log(action);
           state.cart = state.cart.filter(p=>p.id!=action.payload)   
        }
    }
})

export default CartSlice.reducer;
export const {addtoCart,removeFromCart} =CartSlice.actions