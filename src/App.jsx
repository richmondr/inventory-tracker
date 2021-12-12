import React from 'react'

import logo from './assets/logo.svg'
import './styles/app.css'
import AddItem from './components/AddItem'

const App = () => (
  <div className="App">
    <AddItem />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
)

export default App
