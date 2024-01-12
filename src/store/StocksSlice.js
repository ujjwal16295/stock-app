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
    const data = await StockService.getAllStock(val[0],val[1])
    const result= data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    return result
})