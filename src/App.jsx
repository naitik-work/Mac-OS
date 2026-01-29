import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
import Github from './windows/Github'
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
    </main>
  )
}

export default App
