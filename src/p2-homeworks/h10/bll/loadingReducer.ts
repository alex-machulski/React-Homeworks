export type LoadingType = {
    isLoading: boolean
};

const SET_LOADING = "SET-LOADING"

const initState = {
    isLoading: false
};

export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => {
    switch (action.type) {
        case SET_LOADING: {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean) => ({type: SET_LOADING, isLoading} as const);
type LoadingActionType = ReturnType<typeof loadingAC>;


