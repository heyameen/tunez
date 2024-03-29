import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(
                `w-full 
                rounded-md
                bg-blue
                border
                border-transparent
                px-4
                py-2
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-white
                font-medium
                hover:opacity-75
                transition`,
                className,
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
},
);

Button.displayName = "Button";

export default Button;
