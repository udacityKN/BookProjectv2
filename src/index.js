import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//++ imported BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //++ Added BrowserRouter around app
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root')
)
