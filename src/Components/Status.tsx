import {StatusProps} from "./Props.type"

export const Status = (props : StatusProps)=>{
    let message
    if(props.status ==='loading'){
        message ='Loading...'
    }
    else if(props.status === 'success'){
        message ='Data fetched successfully'
    }else if(props.status ==='error'){
        message = 'Erro fetching data'
    }

    return (
        <>
            <div>
                <h2> Status {message}</h2>
            </div>
        </>
    )

}