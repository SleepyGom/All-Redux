import {createStore} from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text)=>{
    return {
        type: ADD_TODO,
        text
    }
}

const deleteToDo = id => {
    return{
        type:DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
            return [...state, {text: action.text , id: Date.now()}]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer);

store.subscribe(()=>{console.log(store.getState())})

const paintToDos = () => {
    const todos = store.getState()
    ul.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.innerText = 'X'
        btn.addEventListener('click', dispatchDeleteToDo)
        li.id = todo.id;
        li.innerText = todo.text
        li.appendChild(btn)
        ul.appendChild(li)
    })
}
store.subscribe(paintToDos)

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}

const dispatchDeleteToDo= (e)=>{
    const id = parseInt(e.target.parentNode.id)
    store.dispatch(deleteToDo(id))
}

const onSubmit = e => {
    e.preventDefault();
    const todo = input.value
    input.value = '';
    dispatchAddToDo(todo)
}

form.addEventListener("submit", onSubmit);