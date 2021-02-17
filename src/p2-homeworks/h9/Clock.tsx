import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId); // stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date()); // setDate
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true); // show
    };
    const onMouseLeave = () => {
        setShow(false); // close
    };

    const stringTime = date ? date.toLocaleTimeString() : "Press 'start' to show the time"; // fix with date
    const stringDate = date?.toLocaleDateString(); // fix with date

    return (
        <div>
            <div className={styles.container}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={styles.time}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={styles.date}>
                        Today is: {stringDate}
                    </div>
                )}
            </div>
            <div className={styles.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
