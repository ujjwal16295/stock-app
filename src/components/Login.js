import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../services/FirebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { addEmail } from '../store/UserSlice'
import { Link, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
    const [email,setEmail]=useState("")
    const dispatch= useDispatch()
    const [password,setPassword]=useState("")
    const emailCheck = useSelector(state=>state.user)

    function Login(e){
       e.preventDefault()
       signInWithEmailAndPassword(auth,email,password)
       .then((usercredential)=>{
        console.log(usercredential)
        dispatch(addEmail(usercredential.user.email))
        toast.success("log in successful", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        redirect("/wishlist")


       })
       .catch((error)=>{
        toast.error("log in unsuccessful", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        console.log(error)
    
       })
    }
  return (
    
    <div>

    {emailCheck.length===1? <div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Logged in as {emailCheck[0]}

     </div>

  
     </div>:<div>
<div>  
<div className='flex items-center justify-center my-4'> 
     <div  className='text-3xl'>
     Log  In

     </div>

  
     </div>
     <div className='flex items-center justify-center m-16 p-8'>
     <div class="w-full max-w-xs p-4">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={Login}>
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
      <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login
      </button>
    
    </div>
    <Link to={"/signin"} class="flex items-center justify-center mt-3 text-blue-400 hover:underline">
         Don't have an account?
    
    </Link>
  </form>
  
</div>
</div>
</div>
      
     
    

    </div>}
    </div>

  )
}
