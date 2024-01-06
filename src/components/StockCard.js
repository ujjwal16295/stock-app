import React, { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, getStocksForCart } from '../store/CartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




export const StockCard = (props) => {
   const dispatch= useDispatch()

   const [flip, setFlip] = useState(false);
   const email = useSelector(state=>state.user)
   const navigate = useNavigate();



   function addStockToCart(val,email){
     if(props.cardsign==="plus"){
      if(email){

         dispatch(addToCart([val,email]))
         dispatch(getStocksForCart(["index",email]))
         toast.success(`${props.stock.name} stock added to wishlist`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
   
      }else{
         navigate("/login")
      }
     

     }else{
      toast.success(`${props.stock.name} stock deleted from wishlist`, {
         position: "bottom-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "dark",
         })
      dispatch(deleteFromCart([props.keyVal,email]))
      dispatch(getStocksForCart(["index",email]))

     }
   }


  return (
   <ReactCardFlip isFlipped={flip}
   flipDirection="horizontal">
   <div>
   <div className='hover:scale-110 m-4 p-2'>
   <div className='text-right z-10 absolute right-0 top-0 border-white border-2 rounded-lg bg-white p-3 hover:motion-safe:animate-bounce ' onClick={()=>{addStockToCart(props.stock,email[0])}}>
   {props.cardsign==="plus"?
   <FontAwesomeIcon icon={solid("plus")} />:
   <FontAwesomeIcon icon={solid("minus")} />}
   </div>
   <div  className='shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-yellow-300 '>
   
   <div onClick={() => setFlip(!flip)} className={`  rounded-lg border-2 border-black grid gap-6 grid-cols-3  ${props.stock.buyOrNot==="buy"?"bg-green-400":"bg-red-400"} p-4`}  >
   
   <div className='text-3xl  text-white col-span-3 text-left mx-2 my-2'>{props.stock.index}: {props.stock.name}
    </div>

    

    <div className=' text-gray-200 text-left m-2 text-base'>Price:
       <div className='text-black'>Rs.{props.stock.currentPrice}
       </div>
    </div>

    <div className='  text-gray-200 text-left m-2 text-base'>High:
       <div className=' text-black   '>Rs.{props.stock.highestPrice}
       </div>
    </div>

    <div className=' text-gray-200 text-left m-2 text-base'>Low:
       <div className=' text-black   '>Rs.{props.stock.lowestPrice}
       </div>
    </div>

    <div className=' text-gray-200 text-left m-2 text-base'>Roe:
       <div className='text-black'>{props.stock.roe}%
       </div>
    </div>

    <div className='  text-gray-200 text-left m-2 text-base'>Roce:
       <div className=' text-black    '>{props.stock.roce}%
       </div>
    </div>

    <div className='  text-gray-200 text-left m-2 text-base'>Pe:
       <div className=' text-black   '>{props.stock.pe}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-center m-2 col-span-3'>ttm(cp):
       <div className=' text-black   '>{props.stock.pttm}%
       </div>
    </div>

    <div className='text-base  text-white col-span-3 text-center mx-2 my-2'>current stock is <div className='text-black'>{Math.sign(props.stock.highestDiffPercentage)===-1?(props.stock.highestDiffPercentage.toFixed(2))*-1:props.stock.highestDiffPercentage.toFixed(2)}%  {Math.sign(props.stock.highestDiffPercentage)===-1?"up":Math.sign(props.stock.highestDiffPercentage)===0?"same":"down"} </div> {Math.sign(props.stock.highestDiffPercentage)===0?"to":"from"} highest price
     </div> 
   </div>
   </div>
   </div>
   </div>
  <div>
   <div className='hover:scale-110 m-4 p-2'>
   <div className='text-right z-10 absolute right-0 top-0 border-white border-2 rounded-lg bg-white p-3 hover:motion-safe:animate-bounce ' onClick={()=>{addStockToCart(props.stock,email[0])}}>
   {props.cardsign==="plus"?
   <FontAwesomeIcon icon={solid("plus")} />:
   <FontAwesomeIcon icon={solid("minus")} />}
   </div>
   <div  className='shadow-md shadow-blue-300 hover:shadow-xl hover:shadow-yellow-300'>
   <div onClick={() => setFlip(!flip)} className={`  rounded-lg border-2 border-black grid gap-6 grid-cols-3  ${props.stock.buyOrNot==="buy"?"bg-green-400":"bg-red-400"} p-4` }  >
   
   <div className={`text-3xl   col-span-3 text-left mx-2 ${props.stock.growthPeriod.startyear===0?"text-red-800":"text-green-800"}`}>{`${props.stock.growthPeriod.startyear===0 ? "Doesn't have a growth rate":` ${props.stock.growthPeriod.startyear} to ${props.stock.growthPeriod.endyear} by ${props.stock.growthPeriod.growth.toFixed(0)}%`}`}
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>cp10:
       <div className='text-black'>{props.stock.cp10}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>cp5:
       <div className=' text-black   '>{props.stock.cp5}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>cp3:
       <div className=' text-black   '>{props.stock.cp3}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>csg10:
       <div className='text-black'>{props.stock.csg10}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>csg5:
       <div className=' text-black   '>{props.stock.csg5}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-left m-2 '>csg3:
       <div className=' text-black   '>{props.stock.csg3}%
       </div>
    </div>

    <div className='text-base  text-gray-200 text-center m-2 col-span-3 '>ttm(csg):
       <div className=' text-black   '>{props.stock.sttm}%
       </div>
    </div>

    <div className='text-base  text-white col-span-3 text-center mx-2 my-2'>current stock is <div className='text-black'>{Math.sign(props.stock.lowestDiffPercentage)===-1?(props.stock.lowestDiffPercentage.toFixed(2))*-1:props.stock.lowestDiffPercentage.toFixed(2)}%  {Math.sign(props.stock.lowestDiffPercentage)===-1?"down":Math.sign(props.stock.lowestDiffPercentage)===0?"same":"up"} </div> {Math.sign(props.stock.lowestDiffPercentage)===0?"to":"from"} lowest price
     </div> 

    
      
   </div>
   </div>
   </div>
   </div>
</ReactCardFlip>
    
  )
}
