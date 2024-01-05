import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export const Navbar = () => {
  const data= useSelector(state=>state.cart)
  const stocks = data["data"]
  return (
    <div className='flex items-center justify-between bg-slate-700 p-8 shadow-md shadow-black'>
    <div className='invisible'>
    hhhhhhhh
    </div>

      <Link className='text-3xl text-slate-50 ' to="/">
        StocksList
      </Link>
      <Link to="/wishlist"  className='border-solid border-2 p-1 rounded-md hover:scale-110 text-white hover:bg-white hover:text-black sm:p-1 md:p-4 lg:p-4 '>
      <div className=' text-base sm:text-base md:text-xl lg:text-xl  '>
      wishList : {stocks.length}
    </div>
</Link>
    </div>
   
   
    
  )
}
