import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import { RouteDecider } from './Utility/RouteDecider'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

import { Home } from './Pages/Home'
import { Setting } from './Pages/Setting'
import { Profile } from './Pages/Profile'
import { Details } from './Pages/Details'
import { Records } from './Pages/Records'
import { Matches } from './Pages/Matches'
import { MatchSetting } from './Pages/MatchSetting'
import { TeamDetails } from './Pages/TeamDetails'
import { Toss } from './Pages/Toss'
import { PlayerDetails } from './Pages/PlayerDetails'
import { Theme } from './Pages/Theme'
import { Feedback } from './Pages/Feedback'
import { RateApp } from './Pages/RateApp'
import { Login } from './Pages/Login'
import { SignUp } from './Pages/Signup'
import { Loader } from './Components/Loader'

//import { NoConnection } from './Pages/NoConnection'

const Routes = (props) => {
  const { history } = props
  // const [connected, setConnected] = useState(false)

  // useEffect(() => {
  //   handleConnectionChange()
  //   window.addEventListener('online', handleConnectionChange)
  //   window.addEventListener('offline', handleConnectionChange)

  //   return () => {
  //     window.removeEventListener('online', handleConnectionChange)
  //     window.removeEventListener('offline', handleConnectionChange)
  //   }
  // }, [])

  // const handleConnectionChange = () => {
  //   const condition = navigator.onLine ? 'online' : 'offline'
  //   if (condition === 'online') {
  //     const webPing = setInterval(() => {
  //       fetch('//google.com', {
  //         mode: 'no-cors'
  //       })
  //         .then(() => {
  //           setConnected(true)
  //           return clearInterval(webPing)
  //         })
  //         .catch(() => {
  //           setConnected(false)
  //         })
  //     }, 2000)
  //     return
  //   }
  //   return setConnected(false)
  // }

  return (
    // <HashRouter>
    //   <Header />
    //   <Switch>
    //     <Route exact path='/' component={() => <Redirect to='/Home' />} />
    //     <Route exact path='/Home' component={connected ? Home : NoConnection} />
    //     <Route
    //       exact
    //       path='/Profile'
    //       component={connected ? Profile : NoConnection}
    //     />
    //     <Route
    //       exact
    //       path='/Setting'
    //       component={connected ? Setting : NoConnection}
    //     />
    //   </Switch>
    //   <Footer />
    // </HashRouter>
    <Router history={history}>
      <Header history={history} />
      <Switch>
        <Route
          history={history}
          exact
          path='/'
          component={() => <Redirect to='/Home' />}
        />
        <Route history={history} exact path='/Home' component={Home} />
        <Route history={history} exact path='/Loader' component={Loader} />
        <Route history={history} exact path='/Login' component={Login} />
        <Route history={history} exact path='/SignUp' component={SignUp} />
        <RouteDecider
          history={history}
          exact
          path='/Profile'
          component={Profile}
        />
        <Route history={history} exact path='/Setting' component={Setting} />
        <RouteDecider
          history={history}
          exact
          path='/Feedback'
          component={Feedback}
        />
        <RouteDecider
          history={history}
          exact
          path='/RateApp'
          component={RateApp}
        />
        <RouteDecider
          history={history}
          exact
          path='/New/Details'
          component={Details}
        />
        <RouteDecider
          history={history}
          exact
          path='/New/TeamDetails'
          component={TeamDetails}
        />
        <RouteDecider
          history={history}
          exact
          path='/New/MatchSetting'
          component={MatchSetting}
        />
        <RouteDecider
          history={history}
          exact
          path='/New/Toss'
          component={Toss}
        />
        <RouteDecider
          history={history}
          exact
          path='/New/PlayerDetails'
          component={PlayerDetails}
        />
        <Route
          history={history}
          exact
          path='/Setting/Theme'
          component={Theme}
        />
        <RouteDecider
          history={history}
          exact
          path='/Records'
          component={Records}
        />
        <RouteDecider
          history={history}
          exact
          path='/Matches'
          component={Matches}
        />
      </Switch>
      <Footer history={history} />
    </Router>
  )
}

export default Routes
