const CHANGE_THEME = "CHANGE_THEME";

const initState = {
    theme: "dark"
};

type InitialStateType = typeof initState;

export const themeReducer = (state: InitialStateType = initState, action: changeThemeActionType): InitialStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string) => ({type: CHANGE_THEME, theme} as const);

type changeThemeActionType = ReturnType<typeof changeThemeAC>;