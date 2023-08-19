import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'


function NavbarNav() {

    const [search, setSearch] = useState("")
    const [validated, setValidated] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        const form = e.currentTarget

        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
            setValidated(true)
           
        }if(!search){
            return
        } else {
            e.preventDefault()
            navigate(`/search?q=${search}`)
            setSearch("")
        }
    }


    return (
        <Navbar expand="lg" className="p-4" sticky="top" style={{ background: '#000' }}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <h4 className='fw-bolder text-warning d-flex justy-content-center align-items-center gap-2'>
                        Movies Lib
                        <BiCameraMovie />
                    </h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className='border border-warning' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className='w-100'>
                            <Form.Group  controlId="validationCustom01">
                                <Form.Control
                                    type="search"
                                    required
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={e => setSearch(e.target.value)}
                                    value={search}
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Por favor informe o nome do filme.
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group>
                                <Button type="submit" className="btn btn-warning"><BiSearchAlt2 /></Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarNav