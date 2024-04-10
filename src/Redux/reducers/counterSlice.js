import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDo:[],
}

const counterSlice = createSlice({
    name: 'todoSlicer',
    initialState,
    reducers: {
        addToDo : (state, action) =>{
            state.toDo=action.payload;
        },
        delTodo : (state, action) =>{
            state.toDo = state.toDo.filter(toDo=>toDo.id!=action.payload)
        }
    }
});

export const {addToDo,delTodo} = counterSlice.actions;
export  default counterSlice.reducer;