import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type TThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IProps extends FontAwesomeIconProps {
    theme?: TThemeProps;
    className?: string;
}
declare const Icon: React.FC<IProps>;
export default Icon;
