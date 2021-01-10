import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    let itemColor = s.highPriority;
    if (props.affair.priority === "middle") {
        itemColor = s.middlePriority;
    }
    if (props.affair.priority === "low") {
        itemColor = s.lowPriority;
    }

    return (
        <div className={itemColor}>
            {props.affair.name}
            <button onClick={deleteCallback} className={s.deleteButton}>X</button>
        </div>
    );
}

export default Affair;
