import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAuthServer } from '../store/UserSlice'
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Spinner } from './Spinner'


export const Signin = () => {
    const dispatch= useDispatch()
    const emailCheck = useSelector(state=>state.user)
    const navigate = useNavigate();


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loader,setLoader]=useState("")
    function Signin(e){
      setLoader(true)
      e.preventDefault()
      dispatch(getAuthServer([email,password,"signin"]))
      if(emailCheck==="error"){

       toast.error("sign in unsuccessful", {
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
       toast.success("sign in successful", {
         position: "bottom-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "dark",
         })
         navigate("/wishlist")


      }
      setLoader(false)
    }
  return (
    <div className='mt-32 md:mt-40'>
    {emailCheck.length===1? <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Logged in as {emailCheck[0]}

     </div>

  
     </div>:<div>  <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Sign In

     </div>

  
     </div>
     <div className='flex items-center justify-center m-4 p-8'>
     <div class="w-full ">
  <form class="bg-white shadow-md rounded p-8 sm:p-20 mb-4 py-8" onSubmit={Signin}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div class="flex items-center justify-center">
    {loader===true?<Spinner loading={loader}/>:<button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        signin
      </button>}
      
    
    </div>
  </form>
  
</div>
</div>
</div>}
     
    
    </div>
  )
}
