export default function Button(props: buttonProps)
{
    return <button onClick={props.onClick} 
    className="btn btn-primary" type={props.type}>{props.children}
    </button>
}
interface buttonProps{
    children:React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
}

Button.defaultProps = {
    type:"button"
}