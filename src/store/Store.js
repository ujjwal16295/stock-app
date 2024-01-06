import { configureStore } from "@reduxjs/toolkit";
import StocksSlice from "./StocksSlice";
import OptionSlice from "./OptionSlice";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";


const Store=configureStore({
    reducer:({
        stocks:StocksSlice,
        options:OptionSlice,
        cart:CartSlice,
        user:UserSlice,
    })
})

export default Store