import { Button, Modal, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import './ventana.css';
import { Navigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import TraductorContext from './TraductorContext';


////////FUNCION PRINCIPAL////// 

function FormularioModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [emailclass, setEmailclass] = useState("");
  const [passclass, setPassclass] =useState("");
  const [email, setEmail] = useState("hola@correo.com");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2]= useState("");
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensajeNombre, setMensajeNombre] = useState("");
  const [nombreclass, setNombreclass] = useState("");
  const [ok, setOk] = useState(false);
  const [mostrarPass1, setMostrarPass1] = useState(false);
  const [mostrarPass2, setMostrarPass2] = useState(false);
  const abierto = <AiOutlineEye/>;
  const cerrado = <AiOutlineEyeInvisible />;
  let iconoOjo1= abierto;
  let iconoOjo2= abierto;
  
  //traductor
  const Traductor = useContext(TraductorContext);

  if(mostrarPass1===true){
    iconoOjo1=cerrado;
  } 

  if(mostrarPass2===true){
    iconoOjo2=cerrado;
  } 





// PARA VERIFICAR ANTES DEL ENVIO DEFAULT DEL FORMULARIO. ESTA FUNCION COMPRUEBA ANTES SI SE CUMPLEN ESTAS CONDICIONES.
  function enviarFormulario(e) {
    e.preventDefault();
    let todoOk = true;

    if (!email.includes("@" && ".")) {
      setEmailclass("is-invalid");
      todoOk = false;
    } else {
      setEmailclass("") //limpia el mensaje
    }

    if (nombre.includes(" ")){
      setNombreclass("is-invalid");
      setMensajeNombre("Este campo no debe contener espacios");
      todoOk = false;
    } else {
      setNombreclass("");

    }

    if(pass1!==pass2){
      setMensaje("Las contraseñas no coinciden");
      setPassclass("is-invalid");
      todoOk = false;
    } else {
      setMensaje("")
    }

    if(todoOk){
      setOk(true); ///si todo est'a bien le asignamos true al OK
    }
  
  }

if(ok){   ///si ok es true
  return (<Navigate to='/bicing'/>); ///como se lo indico??
}


//////////////////////////////////////




///CON ESTA FUNCION SE ADJUDICA LO QUE SE ESCRIBE EN EL INPUT AL VALOR. 
//PARA QUE VAYA COMPROBANDO SI CUMPLE CON LAS CONDICIONES SE PONE EL IF AQUI. SI QUIERO QUE COMPRUEBE DESPUES, LO PONGO EN FUNCTION ENVIAR FORMULARIO
  function pasoEmail(e) {
    let x = e.target.value;
    setEmail(x);

    if (!x.includes("@" && ".")) {
      setEmailclass("is-invalid");
    } else {
      setEmailclass("");
    }
  }


  function nuevoPass1(e){
    let x = e.target.value;
    setPass1(x);
  }

  function nuevoPass2(e){
    let x = e.target.value;
    setPass2(x);
  }

  function asignarNombre(e){
    let x = e.target.value;
    setNombre(x);
  }




  return (
    <>
      <Button className='boton-principal' variant="outline-danger" onClick={handleShow}>
        Registro
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* ONSUBMIT--FUNCION ENVIAR FORMULARIO. PARA LA ACCION DE ENVIO POR DEFECTO DEL NAVEGADOR Y ANTES QUE NADA COMPRUEBA LOS DATOS REVISANDO LAS CONDICIONES QUE LES DAMOS  */}
        <Form onSubmit={enviarFormulario}>
          <Modal.Header closeButton>
            <Modal.Title>Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* NOMBRE DE USUARIO */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control className={nombreclass} type="text" placeholder="Escriba el nombre de usuario" name="name" value={nombre} onInput={asignarNombre} required/>
              <p className="error">{mensajeNombre}</p>
{/* escribir en cada input el name, type, placeholder, value(lo que cambiara en state) y oninput(con una funcion(e) para asignar lo que se escriba en el input al valor que se enviara a la base de datos ) */}
            </Form.Group>

            {/* EMAIL */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control className={emailclass} name="email" onInput={pasoEmail} value={email} type="text" placeholder="Escriba su correo electrónico" required/>
            </Form.Group>


            {/* PASSWORD 1 */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type={mostrarPass1 ? "text" : "password"} onInput={nuevoPass1} value={pass1} placeholder="Escriba una contraseña" required>
                </Form.Control>
                <i onClick={()=>setMostrarPass1(!mostrarPass1)}>{iconoOjo1}</i>
            </Form.Group>


            {/* PASSWORD 2 */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repita la contraseña</Form.Label>
              <Form.Control type={mostrarPass2 ? "text" : "password"} className={passclass} onInput={nuevoPass2} value={pass2} placeholder="Repita la contraseña" required>
                </Form.Control>
                <i onClick={()=>setMostrarPass2(!mostrarPass2)}>{iconoOjo2}</i>
              <p className="error">{mensaje}</p>
            </Form.Group>

            {/* ////////////////////////////////////////////////////////////////////////// */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="danger" type="submit">
              Enviar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </>
  );
}

export default FormularioModal;