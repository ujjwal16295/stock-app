import {createSlice} from "@reduxjs/toolkit"

const initialState=[]

const OptionSlice=createSlice({
    name:"options",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
})

export default OptionSlice.reducer;
export const {add} =OptionSlice.actions;
