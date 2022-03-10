import { GettingProps } from "./Props.type";
import { ref, child, get } from "firebase/database";
import AxiosClient from './Axios'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setProduct} from "../Redux/Actions/ProductAction"
import { State } from "../Redux/Reducer";

export const Getting = (props: GettingProps) => {
  
  
  
   
  



    return (
        <>
            <div>
                <h2>Xin chào {props.name} !!!</h2>
              {/*   <h2>Phone {props.phone}</h2>
                <h2>Age {props.age}</h2> */}
            </div>
        </>
    )

}