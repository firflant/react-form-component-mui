import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import Form from 'react-form-component'
import { Input } from '../src'
import { formControlArgs, formControlArgTypes } from './formControlArgs'

Input.displayName = 'Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Basic text input with built-in _debounce_ feature, which prevents too many updates while typing.',
      },
    },
  },
  argTypes: {
    prefix: {
      description: 'Decorates left side of a field with symbol, unit etc. `ReactNode`',
    },
    suffix: {
      description: 'Decorates right side of a field with symbol, unit etc. `ReactNode`',
    },
    fullWidth: {
      description: 'Disables max width of the field and sets it to 100% width of parent container.',
    },
    variant: {
      description: 'The graphical variant `filled` `outlined` `standard`',
    },
    type: {
      description: `Type of input \`text\` \`email\` \`password\` \`url\` \`tel\` \`number\` \`search\` \`file\` \`date\` \`datetime-local\` \`month\` \`week\` \`time\` \`postcode\` \`password-novalidation\``,
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    min: {
      description: 'Minimal amount of input characters `number`',
    },
    activateEnterPress: {
      description: 'Turns on the submit on enter function, which is declared on a parent _Form_ component, via _onEnterPress_ prop. See _On Enter Press_ example.',
    },
    ...formControlArgTypes,
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = args =>
  <Form
    fields={[args.name]}
    {...args.debounceTime ? actions('onChange') : {}}
    {...args.activateEnterPress ? actions('onEnterPress') : {}}
  >
    <Input {...args} />
  </Form>

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  name: 'example',
  label: 'Basic input',
  type: 'text',
  prefix: '✨',
  suffix: '€',
  min: 5,
  initialValue: '',
  activateEnterPress: false,
  ...formControlArgs,
}
