import PropTypes from 'prop-types'
import React from 'react'

const Button = ({color, text, onClick}) => {

  return (
    <button 
    style={{backgroundColor: color}} 
    className='btn'
    onClick={onClick}>
        {text}
    </button>    
  )
}

Button.defaultProps = {
    color: 'gray'
}

Button.prototypes = {
    color: PropTypes.string,
    test: PropTypes.string,
    onclick: PropTypes.func.isRequired,
}

export default Button