import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Icon, { IProps}  from './index'

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta

const Template: Story<IProps> = (args) => <Icon {...args} />

export const icon = Template.bind({})

icon.args = {
  icon: 'coffee'
}


// export const SizeTest = Template.bind({})

// SizeTest.args = {
//   size: EButtonSize.Large
// }