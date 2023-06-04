import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'


export function useMovies ({ search }) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    const getMovies = () => {
        if (search) {
          //  setResponseMovies(withResults)
          fetch(`https://www.omdbapi.com/?i=tt38 96198&apikey=dfa0b3a3&s=${search}`)
       
            .then(res => res.json())
            .then(json => {
                setResponseMovies(json)
            })
        } else {
            setResponseMovies(withoutResults)
        }
    }

    return { movies: mappedMovies, getMovies }
}

