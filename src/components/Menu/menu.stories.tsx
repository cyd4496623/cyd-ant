import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import TransMenu, { IMenuComponent}  from './index'

export default {
  title: 'Example/Menu',
  component: TransMenu,
} as Meta

const Template: Story<IMenuComponent> = (args) => {
  return <TransMenu >
    <TransMenu.Item>
      菜单yi
    </TransMenu.Item>
    <TransMenu.Item >
      菜单yi22
    </TransMenu.Item>
  </TransMenu>
}

export const menu = Template.bind({})

menu.args = {}


// export const SizeTest = Template.bind({})

// SizeTest.args = {
//   size: EButtonSize.Large
// }