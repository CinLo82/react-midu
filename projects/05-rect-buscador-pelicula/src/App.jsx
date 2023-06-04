import { UseMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import './App.css'

function App() {
  const { movies: mappedmovies } = UseMovies()

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
        <Movies movies={mappedmovies} />
      </main>
      
    </div>
  )
}

export default App
