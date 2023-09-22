import { Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { CarroContext } from "./context/CarroContext";

function Carrito() {
    const context = useContext(CarroContext);

    useEffect(() => {
        context.carrito.forEach(element => {
            console.log(element);
        });
    }, [])

    return (<Container style={styles.container}>
        {context.carrito.map(producto => (
            <Container style={styles.producto}>

                <Image src={producto.images[0]} style={{maxWidth: "150px", maxHeight: "auto"}}/>

                <Container style={{display: "flex", flexDirection: "column"}}>
                    <h3>{producto.title}</h3>
                </Container>

                <Container style={{display: "flex", justifyContent: "flex-end"}}>
                    <Container style={{display: "flex", flexDirection: "column"}}>                        
                    </Container>

                    <Container>
                        Precio x Un: {producto.price}
                        <Container>
                            <Button onClick={() => context.removeFromCart(producto)}>-</Button>
                            <span style={{padding: "5px", border: "1px solid black"}}>{producto.quantity}</span>
                            <Button onClick={() => context.addToCart(producto, 1)}>+</Button>
                        </Container>
                    </Container>
                    
                    <Container>
                        
                        <Button onClick={() => context.fullyRemoveFromCart(producto)}>X</Button>
                    </Container>
                </Container>
            </Container>
        ))}
        <span>Final price: {context.getCartTotal()}</span>
    </Container>);
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        padding: "1rem",
        marginTop: "4rem",
    },
    producto: {
        display: "flex",
        borderTop: "1px dotted",
        borderLeft: "1px dotted",
        borderRight: "1px dotted",
        borderBottom: "1px dotted",
        padding: ".3rem .5rem",
        alignItems: "center",
    }
}

export default Carrito;