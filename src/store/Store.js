import { configureStore } from "@reduxjs/toolkit";
import StocksSlice from "./StocksSlice";
import OptionSlice from "./OptionSlice";


const Store=configureStore({
    reducer:({
        stocks:StocksSlice,
        options:OptionSlice
    })
})

export default Store