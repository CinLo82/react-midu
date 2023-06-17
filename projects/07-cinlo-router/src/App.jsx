import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/Page404'
import { Router } from './Router'
import SearchPage from './pages/Search'
import { Route } from './Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
      
    </main>
  )
}

export default App
