import React from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({text, onBtnClick, id}){
    return(
        <li>
            <Link to={`/${id}`}>
            {text} 
            </Link>
            <button onClick={onBtnClick}>X</button>
        </li>
    )
}

function mapDispatchToPorps(dispatch, ownProps){
    return{
        onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToPorps) (ToDo)