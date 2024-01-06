import {createSlice} from "@reduxjs/toolkit"

const initialState=[]

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addEmail(state,action){
            state.push(action.payload)
        }
    }
})

export default UserSlice.reducer;
export const {addEmail} =UserSlice.actions;
