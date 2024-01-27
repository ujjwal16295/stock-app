import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

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
      return result  
})


