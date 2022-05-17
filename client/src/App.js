import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import BottomNavbar from './Components/BottomNavbar'
import ThemeContext from './Context/ThemeContext'
import { AppRoutes } from './Routes/Routes'

function App() {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className='app-base-container' data-theme={!isDark && 'dark'}>
      <Router>
        <Header />
        <div className='app-content-container'>
          <AppRoutes />
        </div>
        <BottomNavbar />
      </Router>
    </div>
  )
}

export default App
