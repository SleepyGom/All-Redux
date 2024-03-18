import {createStore} from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([],(builder)=>{
//     builder
//     .addCase(addToDo,(state, action) => {
//         state.push({text: action.payload, id: Date.now()})
//     })
//     .addCase(deleteToDo, (state, action) => {
//         return state.filter(toDo => toDo.id !== action.payload)})
// })

const toDos = createSlice({
    name:'toDosReducer',
    initialState:[],
    reducers: {
        addToDo: (state, action) => {
            state.push({text: action.payload, id: Date.now()})
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({reducer: toDos.reducer}); 

export const {add, remove} = toDos.actions;

export default store;