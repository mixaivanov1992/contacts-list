import { PersonalDataAction, PersonalDataActionType, PersonalDataState, SetAuthorization } from "@store/models/personalDataReducer";

const initialState: PersonalDataState = {
    auth: false
};

export const personalDataReducer = (state = initialState, action: PersonalDataAction): PersonalDataState => {
    switch (action.type) {
    case PersonalDataActionType.SET_AUTHORIZATION: {
        const { auth } = action;
        return {...state, auth};
    }
    default:
        return state;
    }
};


export const setAuthorization = (auth: boolean): SetAuthorization => ({
    type: PersonalDataActionType.SET_AUTHORIZATION,
    auth,
});