import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export const Navbar = () => {
  const data= useSelector(state=>state.cart)
  const stocks = data["data"]
  return (
    <div className='flex items-center justify-between bg-slate-700 p-8 shadow-md shadow-black '>
    <div className='invisible'>
    hhhhhhhh
    </div>

      <Link className='text-3xl text-slate-50 ' to="/">
        StocksList
      </Link>
      <Link to="/wishlist"  className='border-solid border-2 p-2 rounded-md hover:scale-110 text-white hover:bg-white hover:text-black'>
      <div className='text-xl  '>
      wishList : {stocks.length}
    </div>
</Link>
    </div>
   
   
    
  )
}
