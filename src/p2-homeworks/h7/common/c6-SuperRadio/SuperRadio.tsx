import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import './SuperRadio.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption - done
    }

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <div className="form_radio">
            <input
                id={"radio" + i}
                className={"radio"}
                type={"radio"}
                name={name}
                checked={restProps.checked}
                value={o}
                onChange={onChangeCallback}
                // name, checked, value, onChange - done
            />
            <label key={name + "-" + i} htmlFor={"radio" + i}>
                <span></span>{o}
            </label>
        </div>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;