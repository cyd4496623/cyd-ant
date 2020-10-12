import {FC} from 'react'
import Menu, {IMenuProps} from './Menu'
import MenuItem, {IMenuItemProps} from './MenuItem'

export type IMenuComponent = FC<IMenuProps> & {
  Item: FC<IMenuItemProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem

export default TransMenu