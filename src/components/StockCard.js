import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";

export const StockCard = (props) => {

   const [flip, setFlip] = useState(false);



  return (
   <ReactCardFlip isFlipped={flip}
   flipDirection="horizontal">
   <div className='shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-yellow-300'>
   <div onClick={() => setFlip(!flip)} className={` sm:text-pretty rounded-lg border-2 border-black grid gap-6 grid-cols-3  ${props.stock.buyOrNot==="buy"?"bg-green-400":"bg-red-400"} hover:scale-110`}  >
   
   <div className='text-3xl  text-white col-span-3 text-left mx-2 my-2'>{props.stock.index}: {props.stock.name}
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>Price:
       <div className='text-black'>Rs.{props.stock.currentPrice}
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>High:
       <div className=' text-black   '>Rs.{props.stock.highestPrice}
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>Low:
       <div className=' text-black   '>Rs.{props.stock.lowestPrice}
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>Roe:
       <div className='text-black'>{props.stock.roe}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>Roce:
       <div className=' text-black    '>{props.stock.roce}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>Pe:
       <div className=' text-black   '>{props.stock.pe}%
       </div>
    </div>
      
   </div>
   </div>

   <div className='shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-yellow-300'>
   <div onClick={() => setFlip(!flip)} className={`  rounded-lg border-2 border-black grid gap-6 grid-cols-3  ${props.stock.buyOrNot==="buy"?"bg-green-400":"bg-red-400"} hover:scale-110`}  >
   
   <div className={`text-3xl   col-span-3 text-left mx-2 ${props.stock.growthPeriod.startyear===0?"text-red-800":"text-green-800"}`}>{`${props.stock.growthPeriod.startyear===0 ? "Doesn't have a growth rate":` ${props.stock.growthPeriod.startyear} to ${props.stock.growthPeriod.endyear} by ${props.stock.growthPeriod.growth.toFixed(0)}%`}`}
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>cp10:
       <div className='text-black'>{props.stock.cp10}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>cp5:
       <div className=' text-black   '>{props.stock.cp5}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>cp3:
       <div className=' text-black   '>{props.stock.cp3}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>csg10:
       <div className='text-black'>{props.stock.csg10}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>csg5:
       <div className=' text-black   '>{props.stock.csg5}%
       </div>
    </div>

    <div className='text-xl  text-gray-200 text-left m-2 '>csg3:
       <div className=' text-black   '>{props.stock.csg3}%
       </div>
    </div>
      
   </div>
   </div>
</ReactCardFlip>
    
  )
}
