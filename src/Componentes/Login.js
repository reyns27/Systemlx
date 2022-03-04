import React from "react";
import Estilos from "../Componentes/Login.module.css";


const Login = () => {
  return (
    <div>
  <img className={Estilos.ware} src="img/wave.png" />
  <div className= {Estilos.container}>
    <div className={Estilos.img}>
      <img src="img/bg.svg" />
    </div>
    <div className={Estilos.logincontent}>
      <form action="index.html">
        <img src="img/avatar.svg" />
        <h2 className={Estilos.title}>Welcome</h2>
        <div className="input-div one">
          <div className={Estilos.i}>
            <i className="fas fa-user" />
          </div>
          <div className={Estilos.div}>
            <h5>Username</h5>
            <input type="text" className={Estilos.input} />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i"> 
            <i className="fas fa-lock" />
          </div>
          <div className={Estilos.div}>
            <h5>Password</h5>
            <input type="password" className={Estilos.input} />
          </div>
        </div>
        <a href="#">Forgot Password?</a>
        <input type="submit" className="btn" defaultValue="Login" />
      </form>
    </div>
  </div>
</div>

   
  )
}

export default Login;