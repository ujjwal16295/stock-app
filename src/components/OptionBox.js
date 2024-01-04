import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStocks } from '../store/StocksSlice'
import {useSelector} from "react-redux"
import { add } from '../store/OptionSlice'


export const OptionBox = (props) => {
    const dispatch= useDispatch()
    const keyVal= useSelector(state=>state.options)


    // const [keyVal,setKeyVal]=useState("")

    function clickfunc(){
        dispatch(add(props.indexVal))
        if(props.name==="pricediff"){
            dispatch(getStocks("highestDiffPercentage"))
        }
        else{
            dispatch(getStocks(props.name))
        }
    }

  return (
   
  <div onClick={clickfunc} className={` ${keyVal[keyVal.length-1]===props.indexVal?"":"hover:scale-110"}`}>
  
     <div className={`border-solid border-2 border-sky-500 hover:bg-blue-600 ${keyVal[keyVal.length-1]===props.indexVal?"scale-110 bg-blue-600":"scale-100 bg-slate-300"}`}>

        <div className={`text-center  hover:text-white ${keyVal[keyVal.length-1]===props.indexVal?"text-white":"text-black"}`}>
             {props.name}
        </div>
     </div>
  </div>
  )
}
