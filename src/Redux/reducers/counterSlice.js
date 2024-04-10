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
        // delTodo : (state, action) =>{
        //     state.toDo = state.toDo.filter(toDo => toDo.id != action.payload);
        // }
        delTodo: (state, action)=>{
            let temp = state.toDo
            let final = temp.filter((item, index)=>{
                return index!=action.payload
            })
            state.toDo=final
        }
    }
});

export const {addToDo,delTodo} = counterSlice.actions;
export  default counterSlice.reducer;