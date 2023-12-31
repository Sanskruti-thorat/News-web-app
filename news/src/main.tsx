import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Auth/AuthContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>,
  </BrowserRouter>
  </React.StrictMode>

)
