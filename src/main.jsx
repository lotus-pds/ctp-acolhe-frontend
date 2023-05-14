import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n/i18nConf';
import './styles/global.css';
import ThemeContextProvider from './hooks/useTheme';
import { store } from './redux/store';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>
  </Provider>
)
