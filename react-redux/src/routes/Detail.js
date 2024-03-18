import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({toDos}){
    const id = useParams();
    console.log(id.id)
    console.log(toDos)
    const matchText = toDos.find(text => text.id === parseInt(id.id))
    console.log(matchText)
    return(
            <h1>{matchText?.text}</h1>
    )

}

function mapStateToProps(state){
    
    return {toDos: state}
}

export default connect(mapStateToProps) (Detail)