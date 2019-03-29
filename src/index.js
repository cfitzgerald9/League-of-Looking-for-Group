import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import LoLFG from './components/LoLFG'
import './index.css'

ReactDOM.render(
  <Router>
      <LoLFG />
  </Router>
  , document.getElementById('root'))
