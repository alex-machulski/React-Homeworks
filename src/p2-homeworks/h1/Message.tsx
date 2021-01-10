import React from "react";
import s from "./Message.module.css";

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.back}>
            <div className={s.speechWrapper}>
                <div className={s.imgavatar}>
                    <img className={s.avatar} src={props.avatar}/>
                </div>
                <div className={s.bubble}>
                    <div className={s.txt}>
                        <p className={s.name}>{props.name}</p>
                        <p className={s.message}>{props.message}</p>
                        <span className={s.timestamp}>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
