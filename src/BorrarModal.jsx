import { useState } from 'react';
import { Button, Modal, Form, ListGroup} from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";


function BorrarModal(props) {

    const APIURL = "http://api1.ricardhernandez.com/api"

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nom = props.fila.nom;
    const email = props.fila.email;
    const url = APIURL + "/alumnes/" + props.fila.id;
    //  const [nom, setNom] = useState('');
    //  const [email, setEmail] = useState('');

    //     useEffect(()=> { 
    //         fetch(url)
    //         .then(x =>x.json())
    //         .then(elemento => {
    //             setNom(elemento[0].nom);
    //             setEmail(elemento[0].email);
    //         })
    //         .catch(error =>console.log(error))
    //     })


    function borrar() {
        const operacion = {
            "method": "DELETE"
        }

        fetch(url, operacion)
           // .then(x => x.json())
            .then(()=>props.refresh())
            .then(handleClose())
            .catch(error => console.log(error))
        ///handle close
    }




    return (
        <>
            <span onClick={handleShow}><i><BsTrash /></i></span>

            <Modal show={show} onHide={handleClose}>

                <Form>

                    <Modal.Header closeButton>
                        <Modal.Title>Borrar datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 style={{color:'red'}}>Está a punto de borrar los siguientes datos:
                        </h5><br />
                        <div>
                            <ListGroup as="ul">
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">ID</div>
                                        {props.fila.id}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Nom</div>
                                        {nom}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Email</div>
                                        {email}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>







                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={borrar} >
                            Borrar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    )

}

export default BorrarModal