/**
 * Dependencies
 */
import React from "react";

function Button({
  type = 'button',
  className,
  onClick,
  children
}) {

  return (
    <button
      type={type}
      className={`btn ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

