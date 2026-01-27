import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
const App = () => {
  return (
    <main>
      <Dock/>
      <Nav/>
      <MacWindow>
        <h1>Hello, Mac OS!</h1>
      </MacWindow>
    </main>
  )
}

export default App
