import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { IProps, EButtonSize, EButtonType}  from './index'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: EButtonSize,
      },
    },
    btnType: {
      control: {
        type: 'inline-radio',
        options: EButtonType,
      }
    },
    colorTest: {
      control: {
        type: 'color',
      }
    },
    dateTest: {
      control: {
        type: 'date',
      }
    }
  }
} as Meta

const Template: Story<IProps> = (args) => <Button {...args}>Button</Button>

export const button = Template.bind({})

button.args = {}


// export const SizeTest = Template.bind({})

// SizeTest.args = {
//   size: EButtonSize.Large
// }