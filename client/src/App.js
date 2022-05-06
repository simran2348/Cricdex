import Routes from './Routes'
import { createHashHistory } from 'history'

function App() {
  const history = createHashHistory()
  return (
    <div className='app_base'>
      <Routes history={history} />
    </div>
  )
}

export default App
