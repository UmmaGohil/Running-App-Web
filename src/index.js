import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query'
import './styles/tailwind.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('app')
)
