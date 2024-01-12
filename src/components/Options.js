import React from 'react'
import { OptionBox } from './OptionBox'

export const Options = (props) => {
 const listOfOptions=["pe","roce","roe","growth","price","pttm","sttm","cp10","cp5","csg10","csg5","index"]
  return (
    <div className='grid  gap-2  grid-cols-4   sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-12' >
        {listOfOptions.map((val,index)=>{
   return(
    <OptionBox name={val} key={index} indexVal={index} dropdown={props.dropdown}/>
          


    )
     })}
    </div>
  )
}
