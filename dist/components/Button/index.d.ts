import React from 'react';
export declare enum EButtonSize {
    Large = "lg",
    Small = "sm"
}
export declare enum EButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
export interface IButton {
    className?: string;
    disabled?: boolean;
    size?: EButtonSize;
    btnType?: EButtonType;
    children: React.ReactNode;
    href?: string;
}
declare type IButA = Partial<React.ButtonHTMLAttributes<HTMLElement> & React.AnchorHTMLAttributes<HTMLElement>>;
export declare type IProps = IButton & IButA;
declare const Button: React.FC<IProps>;
export default Button;
