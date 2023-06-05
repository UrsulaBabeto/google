import React from "react";
import "../styles/Footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <p>Brasil</p>
        <div className="list">
        <ul>
          <li>Sobre</li>
          <li>Publicidade</li>
          <li>Negócios</li>
          <li>Como funciona a Pesquisa</li>
          </ul>
          </div>
          <div className="list">
          <ul>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Configurações</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Footer;
