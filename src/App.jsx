import { useState } from 'react'
import './App.css'

function App() {
  const colour = "8ABE32";
  return (
    <>
      <div className='colour-container'>
        <div className='colour-display' style={{backgroundColor: "#" + colour}}></div>
      </div>
    </>
  )
}

export default App
