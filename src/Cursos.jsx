import { useState, useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import TraductorContext from './TraductorContext'; 


import './tabla-curso.css';
import CrearModal from "./CrearModal";
import EditarModal from "./EditarModal";
import BorrarModal from "./BorrarModal";



function Cursos() {
   const Traductor = useContext(TraductorContext);
   const [datos, setDatos] = useState([]);

 
   //const handleClose = () => setShow(false);
  


   //no hace falta pasarle propiedades???


   function cargaDatos() {
      fetch("http://api1.ricardhernandez.com/api/alumnes")
         .then(datos => datos.json())
         .then(x => setDatos(x))
         .catch((err) => console.log(err))
   };


   // function eliminar(fila_a_eliminar) {
   //    console.log('fila a eliminar:' + fila_a_eliminar)
   //    const api_endpoint = "http://api1.ricardhernandez.com/api/alumnes/" + fila_a_eliminar;   //pasa el numero ID del alumno. y la añade al url
   //    const opcion = { method: "DELETE" };
   //    fetch(api_endpoint, opcion)
   //       .then(() => cargaDatos())
   // }

   //redireccionar al editor
   
 //  if(cargaEditor){
    //  return <EditarModal to={"/alumnes/edit/"+cargaEditor} />;
  //  }

   useEffect(() => { cargaDatos() }, []);

   let filas = datos.map((fila, i) => (
      <tr key={i}>
         <td>{fila.id}</td>
         <td>{fila.nom}</td>
         <td>{fila.email}</td>
         <td>{fila.cursos_id}</td>
         <td><EditarModal  fila={fila} refresh={cargaDatos}/></td>
         <td><BorrarModal fila={fila} refresh={cargaDatos}/></td>
         {/* eliminar fila.id coge el id de la fila y se lo anade a la direccion*/}
      </tr>
   ))


   return (

      <div className="busqueda">
         <h1>{Traductor.traduce('titulo_tablaAlumnos')}</h1>
         <Table striped bordered hover responsive>
            <thead>
               <tr>
                  <th>{Traductor.traduce('id')}</th>
                  <th>{Traductor.traduce('nombre')}</th>
                  <th>{Traductor.traduce('email')}</th>
                  <th>{Traductor.traduce('cursos_id')}</th>
                  <th>{Traductor.traduce('modificar')}</th>
                  <th>{Traductor.traduce('eliminar')}</th>
               </tr>
            </thead>
            <tbody>
               {filas}
            </tbody>
         </Table>
         <CrearModal refresh={cargaDatos}/>
      </div>
   )
}
export default Cursos;