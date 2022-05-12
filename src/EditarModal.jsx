import { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
//import { useParams } from 'react-router-dom';

const APIURL = "http://api1.ricardhernandez.com/api"

function EditarModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nom, setNom] = useState(props.fila.nom);
    const [email, setEmail] = useState(props.fila.email);
    

    ///PARA USAR PARMETROS
            
    const url = APIURL + "/alumnes/"+props.fila.id;
    ///CARGA Y LECTURA DE DATOS /// USE EFFECT Y FETCH 1

    
// function cargaAlumno() { //funcion cargaDatos
//     fetch(url)
//     .then(x => x.json())
//     .then(elemento => {
//         setNom(elemento[0].nom);
//         setEmail(elemento[0].email);
//     })
//     .then(console.log(nom, email, idAlumno))
//     .catch(console.log('Ha habido un error en la lectura de datos.'))

// }//cierra cargaDatos

   //useEffect(() =>{cargaAlumno()});

    //////////CIERRA LECTURA DE DATOS.... FETCH 1//////////////


    /////ABRE FUNCION PRE-ENVIO...INCLUYE EL FECH 2, QUE ACTUALIZA DATOS.///////

    function enviaDatos(e) {
        e.preventDefault();

        ///indico las propiedades y values que se van a ingresar.el nom de la derecha es el que indica el value.
        const alumno = {
            "nom": nom,
            "email": email
        }
        //PREPARAR EL CAMINO PARA EL FETCH DENTRO DE LA FUNCI'ON : url y opciones
        ///indicar lo que se le va a enviar
        const opciones = {
            "method": "PATCH",
            "body": JSON.stringify(alumno), ///pido que convierta a JSON
            headers: { "Content-Type": "application/json" } //indica el formato en que se codifica
        }
        ///indicar adonde lo quiero subir

        ////FETCH 2///
        fetch(url, opciones)
            //.then(x => x.json()) ///POR QU'E AQU'I TAMBIE'N?? NO SE HABIA CONVERTIDO YA EN OPCIONES?
            .then(() => props.refresh())
            .catch(error => console.log(error))

    }









    return (
        <>
            <span onClick={handleShow}><i><FaPencilAlt /></i></span>

            <Modal show={show} onHide={handleClose}>

                <Form onSubmit={enviaDatos}>

                    <Modal.Header closeButton>
                        <Modal.Title>Modificar datos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group as={Row} className="mb-3" controlId="formNom">
                            <Form.Label column sm="2">
                                Nom
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control value={nom} onInput={(e) => setNom(e.target.value)} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control value={email} onInput={(e) => setEmail(e.target.value)} placeholder="ejemplo@email.com" type="text" />
                            </Col>

                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" type='submit' onClick={handleClose}>
                            Modificar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    )


}

export default EditarModal