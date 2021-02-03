import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/tailwind.css'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
