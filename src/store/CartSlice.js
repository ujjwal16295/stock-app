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
            // StockService.addStock(action.payload[0],action.payload[1])
        
        },
         deleteFromCart(state,action){
            // StockService.deleteStockFromCart(action.payload[0],action.payload[1])
           
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
   console.log("this is called dude please work")
    // const data = await StockService.getAllStockForCart(value[0],value[1])
    // const result= data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    // return result

    const val1 = value[0]
    const val2 = value[1]
    const response=await fetch("https://backend-for-stock.onrender.com/cart",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({val:val1,cartname:val2})
      })

      const result=await response.json()
      console.log("json")
      console.log(result)
      console.log("called")
      return result
})

export const addStockCart=createAsyncThunk("carts/post",async(value)=>{

  const val1 = value[0]
  const val2 = value[1]
  await fetch("https://backend-for-stock.onrender.com/cart",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({stock:val1,cartname:val2})
    })
})

export const deleteStockCart=createAsyncThunk("carts/delete",async(value)=>{



  const val1 = value[0]
  const val2 = value[1]
  await fetch("https://backend-for-stock.onrender.com/cart",{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({id:val1,cartname:val2})
    })

})