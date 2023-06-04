import responseMovies from '../mocks/with-results.json'

export function UseMovies () {
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    return { movies: mappedMovies }
}