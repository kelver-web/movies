import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import MovieCard from "../components/MovieCard"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import axios from 'axios'


function Search() {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await axios(url)
    setMovies(res.data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])



  return (
    <Container>
      <Container>
        <h2 className="text-white text-center">Resultados para: <span className="text-warning">{query}</span></h2>
        <Container className="mt-5 text-center">
          {movies.length === 0 && <Container>
            <Spinner animation="border" variant="warning" />
            <span className="text-white"> &nbsp;
              &nbsp;Loading...</span>
          </Container>
          }
        </Container>

      </Container>
      <Container className="col-md-4 mb-3 d-flex justify-content-center mx-1 flex-wrap w-100">
        {movies.length > 0 && 
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Container>
    </Container>
  )
}

export default Search

