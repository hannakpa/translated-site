import { useState } from 'react';
import { Table, Button, Stack, Form, Modal } from 'react-bootstrap';
import './bicing.css';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Mapa from './Mapa';



function Bicing() {

    const [bicis, setBicis] = useState([]);
    const [cantidad, setCantidad] = useState('');

    //const handleClose = () => setShow(true);
    //const [filasFiltradas, setFilasFiltradas] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //let filasFiltradas = bicis.filter(elemento => elemento.free_bikes >= cantidad);

    //////FUNCION PARA OBTENER DATOS
    function cargaDatos() {
        fetch("https://api.citybik.es/v2/networks/bicing")
            .then(datos => datos.json())
            .then((x) => setBicis(x.network.stations.filter(elemento => elemento.free_bikes >= cantidad)))
            .catch(() => console.log("Se ha detectado un problema."))
    };

    // https://www.geeksforgeeks.org/how-to-implement-a-filter-for-objects-in-javascript/


    let mostrarFiltradas = bicis.map((fila, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{fila.name}</td>
            <td>{fila.free_bikes}</td>
            <td>{fila.empty_slots}</td>
            <td>{fila.latitude}</td>
            <td>{fila.longitude}</td>
            {/* eliminar fila.id coge el id de la fila y se lo anade a la direccion*/}
        </tr>
    ))

    //    function filtraDatos(objeto, num){
    //        return num>=cantidad;
    //    }


    //useEffect(() => { cargaDatos() }, [cantidad]);



    // function mostrarMapa() {

    //     let latitud= 41.393;
    //     let longitud = 2.18;
    //     let lugar = [latitud, longitud];
    //     return (

    //     )

    // }






    //function filtraDatos(num){
    /// return num>=cantidad;
    //}

    // let filas = bicis.map((fila, i) => (
    //     <tr key={i}>
    //         <td>{i}</td>
    //         <td>{fila.name}</td>
    //         <td>{fila.free_bikes}</td>
    //         <td>{fila.empty_slots}</td>
    //         <td>{fila.latitude}</td>
    //         <td>{fila.longitude}</td>
    //         {/* eliminar fila.id coge el id de la fila y se lo anade a la direccion*/}
    //     </tr>
    // ))



    //let filasFiltradas = bicis.filter(filtraDatos);


    return (
        <>
            <div className="busqueda">
                <h1>¡Bienvenid@ a Bicing!</h1>

                <Stack direction="horizontal" gap={3}>
                    <Form.Label>Cantidad mínima de bicis</Form.Label>
                    <input size="sm" className="form-control input-sm" min="1" type="number" value={cantidad} onInput={(e) => setCantidad(e.target.value)} />


                </Stack>
                <Button onClick={() => setCantidad('')} className="m-3" variant="outline-danger">Nueva búsqueda</Button>
                <Button onClick={cargaDatos} className="m-3" variant="outline-danger">Buscar</Button>

                <Button variant="outline-danger" className="m-3" onClick={handleShow}>Ver mapa</Button>

                <Modal show={show} onHide={handleClose} fullscreen>
                    <Modal.Header closeButton>
                        <Modal.Title>Mapa de estaciones</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Mapa datos={bicis}/>
                    </Modal.Body>
                </Modal>

            </div>




            <Table show={show} onHide={() => setShow(false)} striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Estación</th>
                        <th>Bicis disponibles</th>
                        <th>Slots libres</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                    </tr>
                </thead>
                <tbody>
                    {mostrarFiltradas}
                </tbody>
            </Table>
        </>
    )
};

export default Bicing