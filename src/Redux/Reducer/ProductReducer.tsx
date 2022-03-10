
import { ActionType } from "../Actions/ActionType"
import { Action } from "../Actions/index"



const initialState = []

const productReducer = (state:any=[] , action: Action):any => {
    switch (action.type) {
        case ActionType.SET_PRODUCT:
            return (state = action.payload)
        case ActionType.SELECTED_PRODUCT:
            return state;
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return state;
        default:
            return {
                ...state
            }

    }
}
export default productReducer