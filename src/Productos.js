import { Card, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Productos({productos}) {
    const navigate = useNavigate();
    const location = useLocation();
    let categoria;

    if(location.state !== null) {
        categoria = location.state.categoria;
    }

    console.log(categoria);

    console.log(productos);

    const irADetalle = (element) => {
        navigate("/detalle", {state:{producto: element}})
    }

    return (<Row xs={1} md={6} className="g-4">
        {
            productos.filter((element) => typeof categoria !== "undefined" ? (element.category === categoria) : true).map((element) => (
                <Col>
                    <Card onClick={() => irADetalle(element)} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.thumbnail} />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
    </Row>);
}

export default Productos;