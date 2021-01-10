import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // fixed
    addUserCallback: (name: string) => void // fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // fixed
    const [error, setError] = useState<string>(""); // fixed

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // fixed
        setName(e.currentTarget.value); // fixed
    };
    const addUser = () => {
        setError("");
        if (name.length > 0) {
            alert(`Hello, ${name}!`); // fixed
            addUserCallback(name);
            setName("");
        } else {
            setError(" Error! Name cannot be empty! ");
        }
    };

    const totalUsers = users.length; // fixed

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
