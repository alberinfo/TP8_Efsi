import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Topbar({busqueda, actualizarBusqueda}) {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState([""]);

    const fetchCategorias = async () => {
        const resp = await axios.get("https://dummyjson.com/products/categories");
        setCategorias(resp.data);
    }

    useEffect(() => {
        fetchCategorias();
    }, [])

    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Bazar chino</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Form className="d-flex">
                <Form.Control
                type="search"
                value={busqueda?busqueda:''}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={actualizarBusqueda}
                />
            </Form>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/productos")}>Todos los productos</NavDropdown.Item>
              {categorias.map((categoria) => (<NavDropdown.Item onClick={() => navigate("/productos", {state:{categoria:categoria}})}>{categoria}</NavDropdown.Item>))}
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/carrito")}>
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

Topbar.propTypes = {
  busqueda: PropTypes.string,
  actualizarBusqueda: PropTypes.func.isRequired
}

export default Topbar;