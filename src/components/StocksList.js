import React, { useEffect, useState } from 'react'
import 'firebase/firestore'
import { StockCard } from './StockCard'
import { Options } from './Options'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { getStocks } from '../store/StocksSlice'
import { getStocksForCart } from '../store/CartSlice'
import { ToastContainer, toast } from 'react-toastify';





export const StocksList = () => {
  const dispatch= useDispatch()
  const data= useSelector(state=>state.stocks)
  const email = useSelector(state=>state.user)

  const stocks = data["data"]
  const [check,setCheck]=useState(0)
 

    useEffect(()=>{
      if(check===0){
      dispatch(getStocksForCart(["index",email[0]]))
      }
        setCheck(1)
        dispatch(getStocks(["index",email[0]]))
        console.log(stocks)
    },[])


if(data["status"]==="loading"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>stocks loading</div></div>
}

if(data["status"]==="error"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>server error please try again later</div></div>
}

  

  return (
    <div>
     <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Nifty 100

     </div>
     </div>
     <div className='my-2 mx-16'>

      <Options/>
     </div>
    <div  className={`grid lg:grid-cols-3  gap-10 my-16 mx-8 md:grid-cols-2 sm:grid-cols-1`}>

     {stocks.map((doc,index)=>{

    
     
        return(
           
        <StockCard key={doc.id}  stock={doc} cardsign="plus" keyVal={doc.id} />
        )
     })}

    </div>

    </div>
  )
}
