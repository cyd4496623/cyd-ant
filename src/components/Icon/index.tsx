import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type TThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IProps extends FontAwesomeIconProps {
  theme?: TThemeProps
  className?: string
}

const Icon: React.FC<IProps> = props => {
  //icon-primary
  const { className, theme, ...resetProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon
      className={classes}
      {...resetProps} />
  )
}

export default Icon