import React from "react";

import Input from "./Input";
import Button from "./Button";


import "../styles/Main.css"
import googlelog from '../images/google-logo-1.png'

function Main(){
     return (
    <div className="Main">
     <img className="googleLogo" src={googlelog} />
      <Input placeholder=" Pesquise no Google ou digite uma URL"/>
      <div className="buttons">
        <Button nome="Pesquisa Google"/>
        <Button nome="Estou com sorte"/>
      </div>
    
    </div>
  );
}

export default Main;
