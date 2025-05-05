import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  handler: () => void;
}

export const variant = {
  primary: "bg-purple-600 text-white flex",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded-md p-4";

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
function Button(props: ButtonProps) {
  return (
    <div>
      <button
        className={`${variant[props.variant]} ${defaultStyles} ${
          sizeStyles[props.size]
        }`}
        onClick={props.handler}
      >
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
        {props.text} {props.endIcon}
      </button>
    </div>
  );
}

export default Button;
