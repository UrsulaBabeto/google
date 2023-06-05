import React from 'react';
import '../styles/Input.css';
import PropTypes from 'prop-types';

function Input (props) {
    return (       
       
        <input className='input' placeholder={props.placeholder} /* value={props.prop6} *//>


    )
};

Input.propTypes ={
    placeholder: PropTypes.string,
}

export default Input;