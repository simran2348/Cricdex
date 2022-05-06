import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './Style/StyleIndex'
import * as serviceWorker from './serviceWorker'
import { Fallback } from './Fallback'

/* Import Themes */
const PlainWhite = React.lazy(() => import('./Themes/PlainWhite'))
const DarkNight = React.lazy(() => import('./Themes/DarkNight'))
const SassyCyan = React.lazy(() => import('./Themes/SassyCyan'))
const SunsetLover = React.lazy(() => import('./Themes/SunsetLover'))
const TheMatrix = React.lazy(() => import('./Themes/TheMatrix'))
const VampireRed = React.lazy(() => import('./Themes/VampireRed'))
const VioletCrush = React.lazy(() => import('./Themes/VioletCrush'))

!localStorage.getItem('TYPE_OF_THEME') &&
  localStorage.setItem('TYPE_OF_THEME', 'Plain White')

localStorage.setItem('LoggedIn', false)

const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME')
  return (
    <>
      <React.Suspense fallback={<Fallback />}>
        {CHOSEN_THEME === 'Dark Night' && <DarkNight />}
        {CHOSEN_THEME === 'Plain White' && <PlainWhite />}
        {CHOSEN_THEME === '' && <PlainWhite />}
        {CHOSEN_THEME === 'Sassy Cyan' && <SassyCyan />}
        {CHOSEN_THEME === 'Sunset Lover' && <SunsetLover />}
        {CHOSEN_THEME === 'The Matrix' && <TheMatrix />}
        {CHOSEN_THEME === 'Vampire Red' && <VampireRed />}
        {CHOSEN_THEME === 'Violet Crush' && <VioletCrush />}
      </React.Suspense>
      {children}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
serviceWorker.register()
