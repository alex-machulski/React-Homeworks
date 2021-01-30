import {InitialPeopleType} from "../HW8";

type SortUpActionType = {
    type: "sort"
    payload: "up"
}

type SortDownActionType = {
    type: "sort"
    payload: "down"
}

type CheckBySelectedAgeActionType = {
    type: "check"
    payload: 18
}

type ActionType = SortUpActionType | SortDownActionType | CheckBySelectedAgeActionType

export const homeWorkReducer = (state: Array<InitialPeopleType>, action: ActionType): Array<InitialPeopleType> => {
    switch (action.type) {
        case "sort": {
            switch (action.payload) {
                case "up":
                    return state.map(p => ({...p})).sort((a, b) => a.name < b.name ? -1 : 1);
                case "down":
                    return state.map(p => ({...p})).sort((a, b) => a.name > b.name ? -1 : 1);
            }
            break;
        }
        case "check": {
            let stateCopy = state.map(p => ({...p}));
            return stateCopy.filter(p => p.age >= action.payload);
        }
        default:
            return state;
    }
};