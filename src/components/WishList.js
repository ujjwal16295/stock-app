import React, { useEffect, useState } from 'react'
import { getStocksForCart } from '../store/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Options } from './Options'
import { StockCard } from './StockCard'
import { ToastContainer, toast } from 'react-toastify';



export const WishList = () => {
    const dispatch= useDispatch()
  const data= useSelector(state=>state.cart)
  const email = useSelector(state=>state.user)
  const [inputVal,setinputVal]=useState("")

  const stocks = data["data"]
 

    useEffect(()=>{
       console.log(email[0])
        dispatch(getStocksForCart(["index",email[0]]))
        console.log(stocks)
    },[])


if(data["status"]==="loading"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>stocks loading</div></div>
}

if(data["status"]==="error"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>server error please try again later</div></div>
}
  return (
    <div className='mt-32 md:mt-40'>
    <div>
     <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     WishList : {stocks.length}

     </div>
     </div>
     <div className='my-2 mx-16'>

      <Options/>
     </div>
     <div>
     <div className='flex items-center justify-center mx-4 '> 

<input class="shadow appearance-none border mt-7   rounded  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="stock name"value={inputVal} onChange={(e)=>{setinputVal(e.target.value)}}/>
</div>
      {stocks.length===0?<div className='h-screen flex items-center justify-center  '><div className='text-4xl'>no wishlist</div></div>:null}

     </div>
    <div  className={`grid lg:grid-cols-3  gap-10 my-16 mx-8 md:grid-cols-2 sm:grid-cols-1`}>

     {stocks.filter(item=>{

const searchItem= inputVal.toLowerCase()
const stockname=item.name.toLowerCase()

return  stockname.startsWith(searchItem)
}).map((doc,index)=>{

    
     
        return(
           
        <StockCard key={doc.id}  stock={doc} cardsign="minus" keyVal={doc.id}/>
        )
     })}

    </div>
    </div>


    </div>
  )
}
