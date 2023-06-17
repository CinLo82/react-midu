import './App.css'
import { Suspense, lazy } from 'react'
import HomePage from './pages/Home'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import { Router } from './Router'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
      
    </main>
  )
}

export default App
