import React, { useEffect, useState } from 'react'
import 'firebase/firestore'
import { StockCard } from './StockCard'
import { Options } from './Options'
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { getStocks } from '../store/StocksSlice'
import { getStocksForCart } from '../store/CartSlice'
import Select from 'react-select';
import { reset } from '../store/OptionSlice'





export const StocksList = () => {
  const dispatch= useDispatch()
  const data= useSelector(state=>state.stocks)
  const email = useSelector(state=>state.user)

  const stocks = data["data"]
  const [check,setCheck]=useState(0)
  const options=[
    {value:"stocks",label:"Nifty 100"},
    {value:"stocksMidCAP",label:"Nifty MidCap"},
    {value:"stocksSmallCAP",label:"Nifty SmallCap"}

  ]
  
  const [dropdownVal,setDropdownVal]=useState(options[0])
 
  const [inputVal,setinputVal]=useState("")

    useEffect(()=>{
      dispatch(getStocks(["index",dropdownVal.value]))
      if(check===0){
        if(email[0]){
      dispatch(getStocksForCart(["index",email[0]]))
      setCheck(1)
        }
      }
    },[])
    useEffect(()=>{ dispatch(getStocks(["index",dropdownVal.value])) },[dropdownVal])

    useEffect(()=>{ setinputVal("") },[dropdownVal])
    useEffect(()=>{dispatch(reset())},[dropdownVal])


if(data["status"]==="loading"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>stocks loading</div></div>
}

if(data["status"]==="error"){
  return <div className='h-screen flex items-center justify-center  '><div className='text-4xl'>server error please try again later</div></div>
}




  return (
    <div>
     <div className='flex items-center justify-center my-4 mt-32 md:mt-40'> 
     <div  className='text-3xl'>
     <Select options={options} defaultValue={dropdownVal} placeholder="select index" onChange={setDropdownVal}  />
     </div>
     </div>
     <div className='my-2 mx-16 '>

      <Options dropdown={dropdownVal.value}/>
     </div>
     <div className='flex items-center justify-center mx-4 '> 

     <input class="shadow appearance-none border mt-7   rounded  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="stock name"value={inputVal} onChange={(e)=>{setinputVal(e.target.value)}}/>
   </div>
   
   {stocks.filter(item=>{

const searchItem= inputVal.toLowerCase()
const stockname=item.name.toLowerCase()

return  stockname.startsWith(searchItem)
}).length===0?<div className='h-96 flex items-center justify-center  '><div className='text-4xl'>no match found</div></div>:null}


    <div  className={`grid lg:grid-cols-3  gap-10 my-16 mx-8 md:grid-cols-2 sm:grid-cols-1`}>

     {stocks.filter(item=>{

const searchItem= inputVal.toLowerCase()
const stockname=item.name.toLowerCase()

return  stockname.startsWith(searchItem)
}).map((doc,index)=>{

    
     
        return(
           
        <StockCard key={doc.id}  stock={doc} cardsign="plus" keyVal={doc.id} />
        )
     })}

    </div>

    </div>
  )
}
