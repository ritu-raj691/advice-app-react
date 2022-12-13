import "./Button.css";
import clsx from "clsx";

function Button(props) {
    const isButtonDisable = props?.isDisabled ?? false; 
    return (
        <button 
            className={clsx("button", {"disable": isButtonDisable})}
            disabled={props?.isDisabled ?? true}
            onClick={props?.onClick}>
                {props?.text ?? "Get me advice!"}
        </button>
    );
};

export default Button;