import React from 'react'
import Greeting from './Greeting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greeting />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
