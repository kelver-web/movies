import { useState, useEffect } from "react"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'


import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import axios from 'axios'


function Home() {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await axios(url)
    setTopMovies(res.data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])


  return (

    <Container>
      <Container>
        <h2 className="text-white text-center">Melhores Filmes: </h2>
        <Container className="mt-5 text-center">
          {topMovies.length === 0 && <Container>
            <Spinner animation="border" variant="warning" />
            <span className="text-white"> &nbsp;
              &nbsp;Loading...</span>
          </Container>
          }
        </Container>

      </Container>
      <Container className="col-md-4 mb-3 d-flex justify-content-center mx-1 flex-wrap w-100">
        {topMovies.length > 0 && topMovies.map((movie) =>
          <MovieCard key={movie.id} movie={movie} />)}
      </Container>
    </Container>
  )
}

export default Home
