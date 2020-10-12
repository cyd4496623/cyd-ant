import React from 'react'
import classNames from 'classnames'

export enum EButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum EButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

export interface IButton {
  className?: string
  disabled?: boolean
  size?: EButtonSize
  btnType?: EButtonType
  children: React.ReactNode
  href?: string
}
// Partial 所有属性改为可选  将button a 所有的属性联合起来
type IButA = Partial<React.ButtonHTMLAttributes<HTMLElement> & 
React.AnchorHTMLAttributes<HTMLElement>>

export type IProps = IButton & IButA

const Button: React.FC<IProps> = props => {
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  //btn, btn-lg, btn-primary
  const classes = classNames('btn',className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === EButtonType.Link) && disabled
  })
  if(btnType === EButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: EButtonType.Default
}

export default Button