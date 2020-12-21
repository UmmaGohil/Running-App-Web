import React from 'react'
import { StoreProvider } from './store'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
