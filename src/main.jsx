import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.js'

import { register } from 'swiper/element'
register();

import theme from './styles/theme.js';
import { Home } from './pages/Home/index.jsx';
//import { HomeTest } from './pages/HomeTest/index.jsx'
//import { SignUp } from './pages/SignUp/index.jsx';
//import { SignIn } from './pages/SignIn/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </StrictMode>,
)
