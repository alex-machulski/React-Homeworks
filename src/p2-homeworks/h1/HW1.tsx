import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Tom",
    message: "How are you?",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            Homework 01
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
