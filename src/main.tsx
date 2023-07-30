import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global.ts'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import router from './App.tsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    
      <GlobalStyles />
    </ThemeProvider>
)
