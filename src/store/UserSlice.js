import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState=[]

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addEmail(state,action){
            state.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAuthServer.fulfilled,(state,action)=>{
            state.push(action.payload)

        })
       

    }
})

export default UserSlice.reducer;
export const {addEmail} =UserSlice.actions;
export const getAuthServer=createAsyncThunk("auth/get",async(val)=>{

    const email = val[0]
    const password = val[1]
    const authType= val[2]
    const response=await fetch("https://backend-for-stock.onrender.com/auth",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:email,password:password,authType:authType})
      })

      const result=await response.json()
      return result.email
  
})