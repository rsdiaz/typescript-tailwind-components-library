import React from 'react'
import { Meta } from '@storybook/react/dist/index'
import { Button } from '../src/index'
import { ButtonProps } from '../src/components/button/index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary', 'cta', 'rent']
      }
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] }
    },
    fullWidth: {
      control: { type: 'boolean' }
    }
  }
} as Meta

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args}>Button</Button>
      <Button variant="secondary">secondary</Button>
    </div>
  </div>
)
Variants.args = {
  variant: 'primary'
}

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} size="sm">
        Small
      </Button>
    </div>
    <div>
      <Button {...args} size="md">
        Medium
      </Button>
    </div>
    <div>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  </div>
)
Sizes.args = {
  variant: ''
}
