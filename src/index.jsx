import React from 'react'
import { render } from 'react-dom'

import Button from './components/Button/Button.jsx'
import CancelButton from './components/CancelButton/CancelButton.jsx'
import TextField from './components/TextField/TextField.jsx'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Button text="blue" />
        <CancelButton />
        <TextField placeholder="green" />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))
