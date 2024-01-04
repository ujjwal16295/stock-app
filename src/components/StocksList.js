import React, { useEffect, useState } from 'react'
import 'firebase/firestore'
import { StockCard } from './StockCard'
import StockService from '../services/StockService'
import { Options } from './Options'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { getStocks } from '../store/StocksSlice'




export const StocksList = () => {
  const dispatch= useDispatch()
  const data= useSelector(state=>state.stocks)
  const stocks = data["data"]
    // const [stocks,setStocks]=useState([])
  

    // const getStocks=async()=>{
    //     const data = await StockService.getAllStock()
    //     setStocks(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    // }

    useEffect(()=>{
        dispatch(getStocks("index"))
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
    <div  className={`grid lg:grid-cols-3  gap-20 my-16 mx-16 md:grid-cols-2 sm:grid-cols-1`}>

     {stocks.map((doc,index)=>{

    
     
        return(
           
        <StockCard key={doc.id}  stock={doc}  />
        )
     })}

    </div>
    </div>
  )
}
