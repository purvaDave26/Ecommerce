import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction, withdrawAction } from '../../redux/BankSlice'

export const Wallet = () => {
    const dispatch=useDispatch()
    const [depAmount, setdepAmount] = useState(0)
    const [withAmount, setwithAmount] = useState(0)

    const depositHandler=()=>
    {
        dispatch(depositAction(Number(depAmount)))
    }
    const withdrawHandler=()=>
    {
        dispatch(withdrawAction(Number(withAmount)))
    }
  return (
    <div>
        <div>
        <h1 className='text-xl text-blue-500'>Wallet</h1>
        <div>
            <label>DEP AMOUNT</label>
            <input type='text' className='border-1' onChange={(event)=>{setdepAmount(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={depositHandler} className='border-2 text-green-500'>DEPOSIT</button>
        </div>
        </div>
        <div>
        <div>
            <label>WITh AMOUNT</label>
            <input type='text' className='border-1' onChange={(event)=>{setwithAmount(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={withdrawHandler} className='border-2 text-green-500'>Withdraw</button>
        </div>
        </div>
    </div>
  )
}
