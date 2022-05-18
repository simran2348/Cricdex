import { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import BottomNavbar from './Components/BottomNavbar'
import ThemeContext from './Context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './Routes/Routes'

import { Provider } from 'react-redux'
import store from './store'

import { loadUser } from './Actions/authAction'

function App() {
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <div className='app-base-container' data-theme={!isDark && 'dark'}>
        <Router>
          <Header />
          <div className='app-content-container'>
            <AppRoutes />
          </div>
          <BottomNavbar />
        </Router>
        <ToastContainer
          position='bottom-center'
          autoClose={1000}
          hideProgressBar={true}
          closeOnClick
          draggable
          theme='dark'
          className={'app-toast-container'}
          toastClassName={'app-toast'}
          bodyClassName={'app-toast-body'}
          closeButton={false}
        />
      </div>
    </Provider>
  )
}

export default App
