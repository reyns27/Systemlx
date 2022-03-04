import React from "react";
import ModuloItem from './ModuloItem';
import ModuloUsuario from './ModuloUsuario'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Contenido = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<ModuloItem />} />
            <Route path="/MUsuario" element={<ModuloUsuario />} />
          </Routes>
        </Router>
    </div>
  )

}

export default Contenido;