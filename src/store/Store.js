import { configureStore } from "@reduxjs/toolkit";
import StocksSlice from "./StocksSlice";
import OptionSlice from "./OptionSlice";
import CartSlice from "./CartSlice";


const Store=configureStore({
    reducer:({
        stocks:StocksSlice,
        options:OptionSlice,
        cart:CartSlice
    })
})

export default Store