import React from "react"

type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
    value?: string
}

export const Input =(props:InputProps)=>{
    const handleInput = (event : React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Hello");

    }
    return (
        <input  type="text" value={props.value} onChange={handleInput} />
    )

}