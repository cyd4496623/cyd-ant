import React, {createContext, useState} from 'react'
import classNames from 'classnames'
import {IMenuItemProps} from './MenuItem'
type TMenuMode = 'horizontal' | 'vertical'
type TSelectCallback = (selectIndex: number) => void

export interface IMenuProps {
  defaultIndex?: number
  className?: string
  mode?: TMenuMode
  style?: React.CSSProperties
  onSelect?: TSelectCallback
}

interface IMenuContext {
  index: number
  onSelect?: TSelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<IMenuProps> = props => {
  const {className,mode,style,children,defaultIndex,onSelect} = props
  const [currentActive,setCurrentActive] = useState(defaultIndex)

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode ==='vertical'
  })

  const handleClick = (e:number) => {
    setCurrentActive(e)
    onSelect && onSelect(e)
  }

  const passedContext: IMenuContext = {
    index: currentActive || 0,
    onSelect: handleClick
  }

  const renderChilden = () => {
    return React.Children.map(children,(child,index)=>{
      const childElemnet = child as React.FunctionComponentElement<IMenuItemProps>
      const {displayName} = childElemnet.type
      if(displayName === 'MenuItem') {
        return React.cloneElement(childElemnet,{
          index: index
        })
      }
      console.log('Warning: Menu has a child which is not a MenuItem component')
      return null
    })
  }

  return (
    <ul className={classes} style={style} /* data-testId='test-menu' */>
      <MenuContext.Provider value={passedContext}>
        {renderChilden()}
      </MenuContext.Provider>
      
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu