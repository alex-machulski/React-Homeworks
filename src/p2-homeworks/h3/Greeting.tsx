import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // fixed
    addUser: () => void // fixed
    error: string // fixed
    totalUsers: number // fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error.length > 0) ? s.error : s.noError; // fixed

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.buttonAdd} onClick={addUser}>add</button>
            <span> Total users: {totalUsers}</span>
            <span className={s.errorMessage}> {error} </span>
        </div>
    );
}

export default Greeting;
