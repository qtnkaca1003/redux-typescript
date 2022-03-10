import React from "react"

type ButtoProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtoProps) => {
    return (
        <button onClick={(event) => props.handleClick(event, 6)}>
            Click !!!
        </button>

    )


}