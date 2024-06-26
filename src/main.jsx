import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
// import Quize from './Quize.jsx'
import AppProviderContext from "./context/AppContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviderContext>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProviderContext>
    </Provider>
  </React.StrictMode>,
)