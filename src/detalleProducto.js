import Carousel from "react-bootstrap/Carousel";
import { Container, Image, ModalTitle, Button } from "react-bootstrap";
import { Form, useLocation } from "react-router-dom";
import { CarroContext } from "./context/CarroContext";
import { useContext, useEffect, useState } from "react";

function DetalleProducto() {
    const [cantidadAAgregar, setCantidadAAgregar] = useState();

    useEffect(() => {
        console.log("CANTAAG", cantidadAAgregar);
    }, [cantidadAAgregar])

    const {state} = useLocation();
    
    const {carrito, addToCart} = useContext(CarroContext);

    const agregarAlCarrito = () => {
        addToCart(state.producto, cantidadAAgregar);
    }

    return (
        <Container style={{display: "flex", flexDirection: "row"}}>
            <Carousel>
                {
                    state.producto.images.map((image) => (
                    <Carousel.Item>
                        <Image src={image}/>
                    </Carousel.Item>))
                }
            </Carousel>

            <Container>
                <h1>{state.producto.title}</h1>
                <div>{state.producto.description}</div>
                <h3>{state.producto.price} USD</h3>
                <div>{state.producto.stock} productos en stock</div>
                <div>Producto de {state.producto.brand}</div>
                <div>Rating {state.producto.rating}/5</div>
                <div>Categoria: {state.producto.category}</div>
                <br/>
                <select onChange={e => setCantidadAAgregar(parseInt(e.target.value))}>
                    <option value="1">1 Unidad</option>
                    <option value="2">2 Unidades</option>
                    <option value="3">3 Unidades</option>
                    <option value="4">4 Unidades</option>
                    <option value="5">5 Unidades</option>
                </select>
                <br/>
                <br/>
                <Button variant="primary" onClick={() => agregarAlCarrito()}>Agregar al carrito</Button>
            </Container>
        </Container>
    );
}

export default DetalleProducto;