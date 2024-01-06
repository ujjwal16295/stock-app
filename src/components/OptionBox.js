import React from 'react'
import { useDispatch } from 'react-redux'
import { getStocks } from '../store/StocksSlice'
import {useSelector} from "react-redux"
import { add } from '../store/OptionSlice'
import { getStocksForCart } from '../store/CartSlice'


export const OptionBox = (props) => {
    const dispatch= useDispatch()
    const keyVal= useSelector(state=>state.options)
    const email = useSelector(state=>state.user)



    function clickfunc(email){
        const pathname = window.location.pathname;
        dispatch(add(props.indexVal))
        if(pathname==="/wishlist"){
            if(props.name==="price"){
                dispatch(getStocksForCart(["highestDiffPercentage",email]))
            }else if(props.name==="growth"){
                dispatch(getStocksForCart(["growthrate",email]))
            }
            else{
                dispatch(getStocksForCart([props.name,email]))
            }
        }else{ if(props.name==="price"){
            dispatch(getStocks("highestDiffPercentage"))
        }else if(props.name==="growth"){
            dispatch(getStocks("growthrate"))
        }
        else{
            dispatch(getStocks(props.name))
        }}
       
    }

  return (
   
  <div onClick={()=>{clickfunc(email[0])}} className={` ${keyVal[keyVal.length-1]===props.indexVal?"":"hover:scale-110"}`}>
  
     <div className={`border-solid border-2 border-sky-500 hover:bg-blue-600 ${keyVal[keyVal.length-1]===props.indexVal?"scale-110 bg-blue-600":"scale-100 bg-slate-300"}`}>

        <div className={`text-center  hover:text-white ${keyVal[keyVal.length-1]===props.indexVal?"text-white":"text-black"}`}>
             {props.name}
        </div>
     </div>
  </div>
  )
}
