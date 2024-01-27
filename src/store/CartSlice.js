import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


const initialState={
    data:[],
    status:"idle",
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
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

export const getStocksForCart=createAsyncThunk("carts/get",async(value)=>{
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