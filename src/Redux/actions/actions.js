import { addToDo, delTodo } from "../reducers/counterSlice"
import store from "../store"
const {dispatch}=store
export const addData=(data)=>{
    dispatch(addToDo(data))
}
export const delData=(id)=>{
    dispatch(delTodo(id))
}