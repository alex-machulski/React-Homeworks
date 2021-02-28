import React, {ChangeEvent} from "react";
import {createMuiTheme, MuiThemeProvider, Slider} from "@material-ui/core";

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: "red",
            },
            track: {
                color: 'green'
            },
            rail: {
                color: 'black'
            }
        }
    }
});

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    return (
        <>
            <MuiThemeProvider theme={muiTheme}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    style={{width: "200px"}}
                    //getAriaValueText={valuetext}
                />
            </MuiThemeProvider>
        </>
    );
}

export default SuperDoubleRange;
