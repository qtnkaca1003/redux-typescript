import { type } from "@testing-library/user-event/dist/type"
import { combineReducers } from "redux"
import productReducer from "./ProductReducer"

export const reducer = combineReducers({
    allProduct: productReducer,
})
export type State = ReturnType<typeof reducer>