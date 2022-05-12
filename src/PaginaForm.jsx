import {useState, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import TraductorContext from './TraductorContext';



function PaginaForm() {
    const Traductor = useContext(TraductorContext);
   // const [nombre, setNombre] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [mensajeEmail, setMensajeEmail] =useState('');


  function enviaFormulario(e){
      //detener la accion de envio del formulario
      e.preventDefault();
      let todoCorrecto =true;

  //VALIDAR EL FORMULARIO:
if(email.includes('@' && '.')){
    alert('enviar formulario')
} else{
    setMensajeEmail('Error. Email incorrecto');

}
/////tuve que guardarlas en una variable para que me dejara pasarlo a un alert.
const suscripcionCorrecta = Traductor.traduce('suscripcion_correcta');
const suscripcionIncorrecta = Traductor.traduce('suscripcion_incorrecta');
 if (todoCorrecto){
     alert(suscripcionCorrecta);
 } else{
     alert (suscripcionIncorrecta);
 }
}



    return (<>

    <Form onSubmit={enviaFormulario}>
    {/* //controlId vincula label con control(input) */}
  <Form.Group className="mb-3" controlId="formBasicEmail"> 
    <Form.Label>{Traductor.traduce('suscripcion')}</Form.Label> 
    {/* en onInput poner la funci'on que actualiza setemail */}
    <Form.Control value={email} onInput={(e)=>setEmail(e.target.value)} type="text" placeholder="e-mail" />
    <Form.Text className="text-muted">
      {mensajeEmail}
    </Form.Text>
  </Form.Group>

  <Button variant="danger" type="submit">
  {Traductor.traduce('suscribirse')}
  </Button>
</Form>
    </>)
}

export default PaginaForm