import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tarjeta(props) {

    let cardTitle = props.titulo;
    let cardText = props.texto;


    return (
        <Card>
            <Card.Img src={props.src} variant="top" />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                {cardText}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>

    )
}

export default Tarjeta