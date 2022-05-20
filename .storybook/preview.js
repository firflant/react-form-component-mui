import React from 'react';
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { FormThemeProvider } from '../src'
import './style.css'

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <FormThemeProvider>
        <Story />
      </FormThemeProvider>
      <CssBaseline />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Overview', 'Getting started', 'Concept'],
        'Docs',
        ['Theming', 'Async', 'Field layouts', '*', 'Contribution guidelines'],
        'Components',
        ['Form']
      ],
    },
  },
}