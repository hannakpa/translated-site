import "./App.css";
import React, { useState } from "react";
import FormularioModal from "./FormularioModal";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import PaginaForm from "./PaginaForm";
import Bicing from "./Bicing";
import Cursos from "./Cursos";
import { Container, Row, Navbar, Nav, Col, ButtonGroup } from "react-bootstrap";

import Slideshow from "./Slideshow";
import Cliente from "./Cliente";
import logo from "./logo/logo.png";

//importo el archivo con las traducciones:
import vocabulario from "./vocabulario";

//importo contexto donde guardo la función "traduce" y el idioma actual
import TraductorContext from "./TraductorContext";

function App() {
  // creo la configuración para elegir el idioma
  const [idioma, setIdioma] = useState(0);
  // creo la función "traduce", que devuelve el string correspondiente a la etiqueta e idioma facilitados
  const traduce = (etiqueta) => vocabulario[etiqueta][idioma];

  return (
    ///////////////// zona fija
    <TraductorContext.Provider value={{ traduce, idioma }}>
      <BrowserRouter>
        <Container>
          {/* ROW CON LINKS DEL NAVBAR */}

          <Row>
            <Navbar bg="light" variant="light">
              {/* METER EN NAVBAR DE BOOTSTRAP */}
              {/* <Link to="/home">Home</Link> */}

              <Navbar.Brand>
                {" "}
                <Link className="nav-link" to="/">
                  <img src={logo} style={{ height: "35px" }} alt="Logo de Bicing" />
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link className="nav-link" to="/cursos">
                  {traduce("cursos")}
                </Link>

                <Link className="nav-link" to="/cliente">
                  {traduce("clientes")}
                </Link>
              </Nav>

              <Col className="md-4">
                <div className="derecha">
                  <ButtonGroup>
                    <button className="btn btn-outline-danger" outline={idioma === 0 ? false : true} onClick={() => setIdioma(0)}>
                      Español
                    </button>
                    <button className="btn btn-outline-danger" outline={idioma === 1 ? false : true} onClick={() => setIdioma(1)}>
                      English
                    </button>
                    <button className="btn btn-outline-danger" outline={idioma === 2 ? false : true} onClick={() => setIdioma(2)}>
                      Русский
                    </button>
                  </ButtonGroup>
                </div>
              </Col>
            </Navbar>
          </Row>

          <Row></Row>
          {/*///////////////////////// termina zona fija */}

          <Row>
            <Slideshow />
          </Row>

          {/* parte cambiante */}

          <Row>
            <Col md="9">
              <div className="big-box">
                <Routes>
                  {/* <Route path="/home" element={<Home/>} /> */}

                  <Route path="/" element={<FormularioModal />} />
                  <Route path="/form" element={<PaginaForm />} />
                  <Route path="/bicing" element={<Bicing />} />
                  <Route path="/cursos" element={<Cursos />} />

                  <Route path="/cliente" element={<Cliente />} />
                </Routes>
              </div>
            </Col>

            <Col sm="12" md="3">
              <div className="aside">
                <PaginaForm />
              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </TraductorContext.Provider>
  );
}

export default App;
