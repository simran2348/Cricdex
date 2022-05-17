import { useContext } from 'react'
import Header from './Components/Header'
import BottomNavbar from './Components/BottomNavbar'
import ThemeContext from './Context/ThemeContext'

function App() {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className='app-base-container' data-theme={!isDark && 'dark'}>
      <Header />
      <BottomNavbar />
    </div>
  )
}

export default App
