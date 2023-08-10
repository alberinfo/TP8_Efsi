import * as React from 'react';
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function Home({ productos }) {
    const navigate = useNavigate();

    function genRand(max) {
        return Math.floor(Math.random() * max);
    }

    function irAProducto(producto) {
        if(typeof producto === "undefined") return;
        navigate("/productos", {state:{producto: productos[producto]}})
    }

    const productosAElegir = 6;
    let listaProdsAMostrar = [];
    for(let i = 0; i < productosAElegir; i++) {
        let rand = genRand(productos.length-1);
        if(listaProdsAMostrar.find((element) => element === rand) === "undefined") {
            i--;
            continue;
        }
        listaProdsAMostrar.push(rand);
    }
    return (
        <Container>
        <Carousel>
        <Carousel.Item style={{width: "100%",height: "100vh"}}>
          <Image src="https://cdn.ethic.es/wp-content/uploads/2023/03/imagen.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <Row xs={1} md={3} className="g-4">
            {
                listaProdsAMostrar.map((element, idx) => (
                    <Col key={idx}>
                        <Card onClick={() => irAProducto(element)} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={productos[element].thumbnail} />
                            <Card.Body>
                                <Card.Title>{productos[element].title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
        </Container>
    );
}

export default Home;