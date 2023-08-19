/* eslint-disable react/prop-types */

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import { FaStar } from 'react-icons/fa'


const imageUrl = import.meta.env.VITE_IMG


function MovieCard({ movie, showLink = true }) {
    return (
        <CardGroup>
            <Card style={{ width: '18rem' }} className='bg-dark mb-4 mx-3 border border-warning border-4'>
                <Card.Img src={imageUrl + movie.poster_path} alt={movie.title} className='rounded-0' />
                <Card.Body>
                    <Card.Title className='text-warning'>{movie.title}</Card.Title>
                    <Card.Text className='text-warning'>
                        <FaStar /> {movie.vote_average}
                    </Card.Text>
                </Card.Body>
                <Container className="text-center">
                    <Button variant="outline-warning" className='outline-warning mt-4 mb-4 w-50'>{showLink && <Nav.Link href={`/movie/${movie.id}`}>Detalhes</Nav.Link>}</Button>
                </Container>
                <Container></Container>
            </Card>
        </CardGroup>
    )
}

export default MovieCard
