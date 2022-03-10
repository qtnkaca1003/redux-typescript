import {ActionType} from "./ActionType"


interface stateData {
  
}

interface setProduct{
    type: ActionType.SET_PRODUCT,
    payload: any

}
interface selectedProduct{
    type: ActionType.SELECTED_PRODUCT,
    payload: {}
}
interface removeSelectedProduct{
    type: ActionType.REMOVE_SELECTED_PRODUCT,
    payload: {}
}
export type Action  = setProduct |selectedProduct|removeSelectedProduct