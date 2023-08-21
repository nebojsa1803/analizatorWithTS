import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-g6d35cxijx1rymx0.us.auth0.com'
      clientId='aSkfp30A94Ayc5khxOTdpGhoqvnjmLyR'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ToastContainer position='top-center' autoClose={2000} />
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
