import { FC } from 'react';
import { IMenuProps } from './Menu';
import { IMenuItemProps } from './MenuItem';
export declare type IMenuComponent = FC<IMenuProps> & {
    Item: FC<IMenuItemProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
