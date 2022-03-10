import {ActionType} from "./ActionType"
import { Dispatch } from "redux"
import {Action} from "./index"
interface stateData {
    data: [{
        category: string
        description: string
        id: number
        image: string
        price: number
        rating?: [
            count: number,
            rate: number
        ]

        title: string
    }]


}

export const setProduct =(products :any)=>{
    return(dispatch : Dispatch<Action>)=>{
        dispatch({
            type:  ActionType.SET_PRODUCT,
            payload: products
        })
    }
}
export const selectedProduct =(product: string[]) =>{
    type ProductType = {
    product: {
        id: number,
        title: string,
        price: number,
        description: string,
        image: string
    }
}
    return(dispatch : Dispatch) =>{
        dispatch({
            type: ActionType.SELECTED_PRODUCT,
            payload: product
        })
    }
}
export const removeProduct = (product: string[]) =>{
    return(dispatch : Dispatch) =>{
        dispatch({
            type: ActionType.REMOVE_SELECTED_PRODUCT,
            payload: product
        })
    }
}