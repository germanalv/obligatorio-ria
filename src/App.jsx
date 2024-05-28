import { useState } from 'react'
//import './App.css'
import Chat from './components/Chat'
import User from './components/User'

function App() {
  

  return (
    <div className="App">
      <div className="container pt-3">
        <div className="row">
          <div className="col-2">
            <User/>
          </div>
          <div className="col-10">
            <Chat/>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default App
