import { Set_Current_Location } from "../Actions/actions.types";

const Initial_Location_State = {
    URL : null
};

export const locationReducer = (state = Initial_Location_State, action) => {
    const { type, payload } = action;

    switch(type){
        case Set_Current_Location:
            return {
                URL : payload
            };
        default:
            return state;
    }
}