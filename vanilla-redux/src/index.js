
import { createStore } from 'redux';

const plus = document.getElementById('add')
const minus = document.getElementById('minus')
const num = document.querySelector('span')

num.innerText = 0;

const countModify = (count = 0, action )=> {
    switch(action.type){
        case "ADD":
            return count + 1
        case "MINUS":
            return count - 1
        default:
            return count
    }
};

const countstore = createStore(countModify);
const onChange = () => {
    num.innerText = countstore.getState();
}
countstore.subscribe(onChange)

plus.addEventListener("click",()=>countstore.dispatch({type : "ADD"}))
minus.addEventListener("click",()=>countstore.dispatch({type : "MINUS"}))