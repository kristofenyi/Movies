export default function Button(props: buttonProps)
{
    return <button onClick={props.onClick} 
    className="btn btn-primary" type={props.type}
    disabled={props.disabled}
    
    >{props.children}
    </button>
}
interface buttonProps{
    children:React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
}

Button.defaultProps = {
    type:"button",
    disabled: false
}