import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/CartSlice';

export const Cart = () => {
  const disptach=useDispatch();

   const state=useSelector(state=>state)
  {
    console.log("cart..",state.cart.cart)
  }
  return (
     <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        CART
      </h1>
      <div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
               <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">remove</th>
              <th className="px-6 py-4">qty</th>
            </tr>
          </thead>
          <tbody>
            {
              state.cart.cart.map((p)=>
              {
                return(
                                              <tr
                                  key={p.id}
                                  className="border-b hover:bg-gray-50 transition"
                                >
                                  <td className="px-6 py-4">{p.id}</td>
                
                                  <td className="px-6 py-4 font-medium capitalize">
                                    {p.name}
                                  </td>
                
                                  <td className="px-6 py-4 font-semibold">
                                    ₹{p.price}
                                  </td>
                                 <td className="px-6 py-4">
                                      <button onClick={()=>{disptach(removeFromCart(p.id))}} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                                        REMOVE FROM CART
                                      </button>
                                    </td>
                                 <td className="px-6 py-4 font-semibold">{p.qty}</td>
                                </tr>
                            )
              })
            }

          </tbody>
        </table>
        </div>
    </div>
  )
}
