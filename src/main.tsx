import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global.ts'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import router from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './context/AuthContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    
      <GlobalStyles />
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </ThemeProvider>
)
