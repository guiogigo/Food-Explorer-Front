import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'

import { AuthProvider } from './hooks/auth.jsx'
import { CartProvider } from './hooks/cart.jsx'
import { SearchProvider } from './hooks/search.jsx'

import { register } from 'swiper/element'
register();

import theme from './styles/theme.js';
import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <Routes/>
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
