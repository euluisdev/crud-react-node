import React from "react";
import '/src/css/Cards.css';
import FormDialog from "./Dialog";

const Card = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };

    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen} 
                name={props.name} 
                cost={props.cost}
                category={props.category}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id} 
            />
            <div className="card--container" onClick={(() => handleClickCard())}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--category">{props.category}</p>
                <p className="card--cost">R$ {props.cost}</p>
            </div>
        </>
    )
};

export default Card;