export const formControlArgs = {
  help: 'Help text',
  disabled: false,
  className: '',
}

export const formControlArgTypes = {
  name: {
    description: 'Unique field identifier for a _Form_ `string`',
    type: { name: 'string', required: true },
  },
  label: {
    description: 'Field label, displayed before it `ReactNode`',
  },
  help: {
    description: 'Text displayed under a field `ReactNode`',
  },
  initialValue: {
    description: 'Default value of a field',
  },
  disabled: {
    description: 'Turns off the interaction with a field `ReactNode`',
  },
  className: {
    description: 'Gives input control wrapper a class `string`',
  },
}
