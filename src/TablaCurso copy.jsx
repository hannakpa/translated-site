import { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {BsTrash} from "react-icons/bs";
import './tabla-curso.css';


function TablaCurso() {

    const [datos,setDatos] = useState([]);

    //no hace falta pasarle propiedades???
   

    function cargaDatos(){
        fetch("http://api1.ricardhernandez.com/api/alumnes")
        .then(datos=> datos.json() )
        .then(x => setDatos(x))
        .catch(()=> console.log("Se ha detectado un problema."))
    };


    function eliminar(fila_a_eliminar){      
        console.log('fila a eliminar:' + fila_a_eliminar)
        const api_endpoint = "http://api1.ricardhernandez.com/api/alumnes/"+fila_a_eliminar;   //pasa el numero ID del alumno. y la añade al url
        const opcion = {method: "DELETE"};
        fetch(api_endpoint,opcion)
        .then(() =>cargaDatos()) 
    }


    useEffect(() => {cargaDatos()},[]);  

    let filas = datos.map((fila,i)=>(
        <tr key={i}>
            <td>{fila.id}</td>
            <td>{fila.nom}</td>
            <td>{fila.email}</td>
            <td>{fila.cursos_id}</td>
            <td><i onClick={()=>eliminar(fila.id)}><BsTrash /></i></td> 
            {/* eliminar fila.id coge el id de la fila y se lo anade a la direccion*/}
        </tr>
    ))


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Curso</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
            {filas}
             </tbody>
        </Table>

    )
};

export default TablaCurso;