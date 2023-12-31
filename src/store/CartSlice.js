import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import StockService from '../services/StockService'


const initialState={
    data:[],
    status:"idle",
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            StockService.addStock(action.payload[0],action.payload[1])
        },
        deleteFromCart(state,action){
            StockService.deleteStockFromCart(action.payload[0],action.payload[1])
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getStocksForCart.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status="idle"
        })
        .addCase(getStocksForCart.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(getStocksForCart.rejected,(state,action)=>{
            state.status="error"
        })

    }
})

export default CartSlice.reducer;
export const {addToCart,deleteFromCart} =CartSlice.actions;

export const getStocksForCart=createAsyncThunk("carts/get",async(value)=>{

    const data = await StockService.getAllStockForCart(value[0],value[1])
    const result= data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    return result
})
