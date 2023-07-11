import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListPropos } from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },

  argTypes: {
    items: {
      type: ''
    }
  },

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListPropos> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
