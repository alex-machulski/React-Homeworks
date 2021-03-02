import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'light-green', 'violet', 'blue', 'military-green', 'yellow'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themes.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
