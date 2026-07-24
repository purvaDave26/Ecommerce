import React from 'react'
import { useSelector } from 'react-redux'

export const GetData = () => {
    const data=useSelector((state)=>state.content.data)
    // console.log(data)
  return (
    <div>
        <h1>getData</h1>
        <table>
            <thead>
                <th>
                    <td>id</td>
                    <td>Name</td>
                    <td>Email</td>
                   
                </th>
            </thead>
            <tbody>
                {
                data?.map((d)=>
                {
                    return(
                        <tr>
                            <td>{d._id}</td>
                             <td>{d.name}</td>
                             <td>{d.email}</td>
                        </tr>
                       
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}
