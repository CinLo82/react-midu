import responseMovies from './mocks/with.results.json'
import withoutResults from './mocks/with.results.json'
import { Movies } from './components/movies'


import './App.css'

function App() {
  const movies = responseMovies.Search

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type="text" placeholder='Advangers, Star Wars, The Matrix...' />
          <button type='submid'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
      
  )
}

export default App
