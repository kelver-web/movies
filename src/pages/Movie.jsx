import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

import formatCurrency from "../utils/formatCurrency"


import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

import axios from "axios"


function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await axios(url)
    setMovie(res.data)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [id])


  return (

    <div>
      {movie && (

        <CardGroup className="w-50 m-auto mt-5">
          <Card style={{ width: '18rem' }} className='bg-dark mb-4 mx-3 border border-warning border-4'>
            <Card.Img src={imageUrl + movie.poster_path} alt={movie.title} className='rounded-0' />
            <Card.Body>
              <Container className="mb-2 d-flex justify-content-between">
                <Container>
                  <Card.Title className='text-warning'>{movie.title}</Card.Title>
                  <Card.Text className='text-warning'>{movie.tagline}</Card.Text>
                </Container>
                <Card.Text className='text-warning'>
                  <FaStar /> {movie.vote_average}
                </Card.Text>
              </Container>
              <Container>
                <Card.Text className='text-warning'>
                  <Container className="info mb-2">
                    <h3>
                      <BsWallet2 /> Orçamento:
                    </h3>
                    <Card.Text>{formatCurrency(movie.budget)}</Card.Text>
                  </Container>
                  <Container className="info mb-2">
                    <h3>
                      <BsGraphUp /> Receita:
                    </h3>
                    <Card.Text>{formatCurrency(movie.revenue)}</Card.Text>
                  </Container>
                  <Container className="info mb-2">
                    <h3>
                      <BsHourglassSplit /> Duração:
                    </h3>
                    <Card.Text>{movie.runtime} minutos</Card.Text>
                  </Container>
                  <Container className="info description mb-2">
                    <h3>
                      <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <Card.Text>{movie.overview}</Card.Text>
                  </Container>
                </Card.Text>

              </Container>
            </Card.Body>
          </Card>
        </CardGroup>

      )
      }
    </div >



  )
}

export default Movie
