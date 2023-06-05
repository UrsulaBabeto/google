import React from "react";
import "../styles/Button.css";
import PropTypes from 'prop-types';

function Button(props) {

  return (
    <React.Fragment>        
       <button className="button">{props.nome}</button>
      </React.Fragment>
    
  );
}

Button.propTypes = {
  nome: PropTypes.string.isRequired,

} 

export default Button;
