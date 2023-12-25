import React from "react";
import '/src/css/Cards.css';

const Card = (props) => {
    return ( 
        <div className="card--container">
            <h1 className="card--title">{props.name}</h1>
            <p className="card--category">{props.category}</p>
            <p className="card--cost">R$ {props.cost}</p>
        </div>
    )
};

export default Card;