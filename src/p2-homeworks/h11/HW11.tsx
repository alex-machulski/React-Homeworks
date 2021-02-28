import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(80);

    const onChangeTwoRanges = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div className={s.block}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.superRange}>
                <span className={s.span}>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось - done
                />
            </div>

            <div className={s.superRange}>
                <span className={s.span}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeTwoRanges}
                    // сделать так чтоб value1 и value2 изменялось - done
                />
                <span className={s.span}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
