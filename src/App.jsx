import React from 'react'
import Home from './components/Home'
import CreatePage from './components/CreatePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-page" element={<CreatePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App