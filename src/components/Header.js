import React from 'react'
import { Header } from '../AppStyle'

export default () => {
  return (
    <Header>
      <nav className="navbar">
        <div className="navbar--logo">
          <img src="https://imagensfree.com.br/wp-content/uploads/2021/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
        </div>

        <div className="navbar--menu">
          <ul className="menu">
            <li><a href="#">Premium</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Baixar</a></li>
            <div className="separator" />
            <li><a href="#">Inscrever-se</a></li>
            <li><a href="#">Entrar</a></li>
          </ul>
        </div>

      </nav>
    </Header>
  )
}