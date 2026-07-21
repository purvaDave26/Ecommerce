import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/CartSlice';

export const Shop = () => {

    const disptach=useDispatch();

    const [products, setproducts] = useState([
    { id: 1, name: "charger", price: 100 },
    { id: 2, name: "handsfree", price: 200 },
    { id: 3, name: "doc", price: 500 },
  ]);

  

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shop
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-800 text-white">
                <tr>
                   <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p)=>
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
                    <button onClick={()=>{disptach(addtoCart(p))}} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
                      ADD TO CART
                    </button>
                  </td>
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
