import React from 'react';
import Estilos from '../css/Login.module.css';

const MenuPrincipal = () => {
  return (
    <div>
      <div className={Estilos.container}>

        <ul className="sidebar">
          <li><span>Travelers</span></li>
          <li><span><i className="fa fa-home"></i></span><span>Home</span></li>
          <li><span><i className="fa fa-dashboard"></i></span><span>Dashboard</span></li>
          <li><span><i className="fa fa-users"></i></span><span>Users</span></li>
          <li><span><i className="fa fa-shopping-cart"></i></span><span>Products</span></li>
          <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li>
          <li><span><i className="fa fa-gear"></i></span><span>Settings</span></li>
        </ul>

        <div className="content">

        </div>
      </div>
    </div>
  )
}

export default MenuPrincipal;