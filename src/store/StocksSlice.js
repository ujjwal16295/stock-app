import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import StockService from '../services/StockService'

const initialState={
    data:[],
    status:"idle",
}

const StocksSlice=createSlice({
    name:"stocks",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getStocks.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status="idle"
        })
        .addCase(getStocks.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(getStocks.rejected,(state,action)=>{
            state.status="error"
        })

    }
})

export default StocksSlice.reducer;
export const getStocks=createAsyncThunk("products/get",async(val)=>{
    // const data = await StockService.getAllStock(val[0],val[1])
    // const result= data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    // return result
    const val1 = val[0]
    const val2 = val[1]
    const response=await fetch("https://backend-for-stock.onrender.com",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({val:val1,dbRef:val2})
      })

      const result=await response.json()
      console.log("json")
      console.log(result)
      console.log("called")
      return result
  
})


// const getNotes=async()=>{
//     const response=await fetch("http://localhost:5000/api/notes/fetchallnotes",{
//       method:"GET",
//       headers:{
//         "Content-Type":"application/json",
//         "auth-token":localStorage.getItem('token')
//       }
//     })
//     const json=await response.json()
//     setNote(json)
//   }
//   //to addnote using api
//   const addNote=async(title,description,tag)=>{
//     const response=await fetch("http://localhost:5000/api/notes/addnote",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//         "auth-token":localStorage.getItem('token')
//       },
//       body:JSON.stringify({title,description,tag})
//     })

//   }