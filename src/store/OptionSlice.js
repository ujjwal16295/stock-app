import {createSlice} from "@reduxjs/toolkit"

const initialState=[11]

const OptionSlice=createSlice({
    name:"options",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        reset(state,action){
            for(let i=0;i<=state.length+1;i++ ){
                state.pop()
            }
            state.push(11)
        }
    }
})

export default OptionSlice.reducer;
export const {add,reset} =OptionSlice.actions;
