import { ButtonHTMLAttributes } from "react";

export type buttonProps = {
    [ key: string ]: any;
    label?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>[ "type" ];
    children?: any;
};

export function Button (props: buttonProps) {
    const {
        label,
        onClick,
        className,
        disabled,
        type,
        children,
        ...rest
    } = props;

    return (
        <button
            className={ className }
            onClick={ onClick }
            disabled={ disabled }
            type={ type ?? "button" }
            { ...rest }
        >
            { label || children }
        </button>
    );

}