import { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';


const APIURL = "http://api1.ricardhernandez.com/api" //indicar sin la ruta ///INDICAR FUERA

function CrearModal(props) {



    const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    
  

    

    function handleClose (){
        setShow(false);
    }





    function enviaAlumno(e) {
        e.preventDefault();
        
        ///indico las propiedades y values que se van a ingresar.el nom de la derecha es el que indica el value.
        const alumno = {
            "nom":nom,
            "email":email
        }

        //PREPARAR EL CAMINO PARA EL FETCH DENTRO DE LA FUNCI'ON : url y opciones
        ///indicar lo que se le va a enviar
        const opciones = {
            "method": "POST",
            "body":JSON.stringify(alumno), ///pido que convierta a JSON
            headers:{"Content-Type": "application/json"} //indica el formato en que se codifica
        }
        ///indicar adonde lo quiero subir
        const url = APIURL + "/alumnes";

        fetch (url, opciones)
        //.then(x=>x.json())
        .then(()=>props.refresh())
        .catch(err => console.log(err))      ////POR QU'E SALEN LOS DOS MENSAJES EN A CONSOLA??


    }

    

    return (
        <>
            <Button onClick={handleShow} className="m-3" variant="outline-danger">Añadir alumno</Button>

            <Modal show={show} onHide={handleClose}>

                <Form onSubmit={enviaAlumno}>
               
                <Modal.Header closeButton>
                    <Modal.Title>Crear datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <Form.Group  as={Row} className="mb-3" controlId="formNom">
                            <Form.Label column sm="2">
                                Nom
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control value={nom} onInput={(e)=>setNom(e.target.value)} type="text" />
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3" controlId="formEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control value={email} onInput={(e)=>setEmail(e.target.value)} placeholder="ejemplo@email.com" type="text" />
                            </Col>
                           
                        </Form.Group>

                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" type='submit' onClick={handleClose} > 
                        Añadir
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default CrearModal