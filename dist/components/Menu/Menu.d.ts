import React from 'react';
declare type TMenuMode = 'horizontal' | 'vertical';
declare type TSelectCallback = (selectIndex: number) => void;
export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: TMenuMode;
    style?: React.CSSProperties;
    onSelect?: TSelectCallback;
}
interface IMenuContext {
    index: number;
    onSelect?: TSelectCallback;
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<IMenuProps>;
export default Menu;
