import React, { useEffect, useState } from 'react'
import 'firebase/firestore'
import { StockCard } from './StockCard'
import StockService from '../services/StockService'




export const StocksList = () => {
    const [stocks,setStocks]=useState([])
    const opacityVal=100
  

    const getStocks=async()=>{
        const data = await StockService.getAllStock()
        setStocks(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }

    useEffect(()=>{
        getStocks()
    },[])


  

  return (
    <>
         {stocks.length===0?<div className='h-screen flex items-center justify-center  '><div className='text-4xl'>stocks loading</div></div>:null}

     <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Nifty 100

     </div>
     </div>
    <div  className={`grid grid-cols-3 gap-20 my-16 mx-16`}>

     {stocks.map((doc,index)=>{

    
     
        return(
           
        <StockCard key={doc.id}  stock={doc}  />
        )
     })}

    </div>
    </>
  )
}
