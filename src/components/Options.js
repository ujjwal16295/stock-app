import React from 'react'
import { OptionBox } from './OptionBox'

export const Options = () => {
 const listOfOptions=["pe","roce","roe","growthrate","pricediff","pttm","sttm","cp10","cp5","csg10","csg5","index"]
  return (
    <div className='grid grid-cols-12 gap-2' >
        {listOfOptions.map((val,index)=>{
   return(
    <OptionBox name={val} key={index} indexVal={index}/>
          


    )
     })}
    </div>
  )
}
