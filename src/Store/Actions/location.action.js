import { createAction } from "../../Utils/Reducers/reducer.utils"
import { Set_Current_Location } from "./actions.types"


const setUrlAction = (location_payload) => createAction(Set_Current_Location,location_payload);

export const setLocation = (payload) => async(dispatch) => {
    dispatch(setUrlAction(payload));
}