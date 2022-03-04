import React from "react";
import Contenido from "./Componentes/Contenido";
import Cabecera from "./Componentes/Estructura/Cabecera";
import Menu from "./Componentes/Estructura/Menu";
import Pie from "./Componentes/Estructura/Pie";
//import MenuPrincipal from "./Componentes/MenuPrincipal";
//import Login from "./Componentes/Login";




function App() {
  return (
    
    <div>
    <Cabecera/>
    <Menu />
    <Contenido />
    <Pie />
    </div>
  );
}

export default App;
