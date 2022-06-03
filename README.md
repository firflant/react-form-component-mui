[MUI](https://mui.com/) port for [react-form-component](https://www.npmjs.com/package/react-form-component) library.

This project is in an early development phase and provides only [few basic components](https://github.com/firflant/react-form-component-mui/tree/master/src) for now.

## Quick start

### Install

```
yarn add react-form-component-mui
```

### Use

```jsx
// App.js
// Wrap entitre app into a FormThemeProvider.
import React from 'react'
import ReactDOM from 'react-dom'
import { FormThemeProvider } from 'react-form-component-mui'
import BasicExampleForm from './BasicExampleForm'

const App = () =>
  <FormThemeProvider>
    <BasicExampleForm />
  </FormThemeProvider>

ReactDOM.render(<App />, document.querySelector('#app'))


// BasicExampleForm.js
// Create a fully operational form.
import React from 'react'
import ReactDOM from 'react-dom'
import Form, {
  Input,
  Select,
  SubmitButton,
} from 'react-form-component-mui'

const BasicExampleForm = () =>
  <Form fields={['name', 'email', 'type']}>
    <Input
      name='name'
      label='User name'
    />
    <Input
      name='email'
      type='email'
      label='E-mail'
    />
    <Select
      name='type'
      label='Type of a user'
      options={['Viewer', 'Moderator', 'Admin']}
    />
    <SubmitButton
      onClick={fields => console.log(fields)}
    >Save</SubmitButton>
  </Form>

export default BasicExampleForm
```

### Roadmap

- Documentation
- More components
