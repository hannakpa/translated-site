import { useEffect, useState } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';

function Cliente() {
    //use state. variable que recoge los datos del servidor
    const [clientes, setClientes] = useState([]);  ///poner al usestate un nombre representativo


    function cargaDatos() {  //se puede declarar para llamarla despues a lo lrgo del codigo
        let url = "https://randomuser.me/api?results=10";
        let opciones = { method: "GET" };  ///opcional si es get

        fetch(url, opciones)
            .then(r => r.json()) ///siempre se anade al fetch
            //en este caso necesito el array results de la base de datos porque esta dentro de un objeto. por eso extraigo el results . 
            //antes de seguir, ver con colsole log si esta cogiendo los datos
            .then(respuesta => setClientes(respuesta.results)) ///lista generada del then anterior //guarda los datos en "lista"
            .catch(mens => console.log(mens)) //mostrar en pantalla el mensaje de error que salga.
    }

    useEffect(() =>{cargaDatos()}, []);

    //mostrar los datos en pantalla. 
    let cards = clientes.map(cliente => {
        //para cada cliente hace lo siguiente:
        return (
            <Col xs="6" md="3">
            <Card>
                <Card.Img variant="top" src={cliente.picture.medium} />
                <Card.Body>
                    <Card.Title>{cliente.name.title+' '+cliente.name.first+''+cliente.name.last}</Card.Title>
                    <Card.Text>
                        {cliente.location.city+' '+cliente.location.country}
                    </Card.Text>
                    <Button variant="primary">Mas informacion</Button>
                </Card.Body>
            </Card>
            </Col>
        )

    })



    return (
        <><h1>Clientes</h1>
        <Row>
        {cards}
        </Row>
        </>
        

    )

}

export default Cliente