type StyleProps ={
    style: React.CSSProperties
}

export const Containner =(props: StyleProps)=>{
    return(

        <div style={props.style}>
            Hello !!!
            
        </div>
    )




}