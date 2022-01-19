/**
 * Dependencies
 */
import React from "react";

function Course({ name, image }) {
  return (
    <div className='course-item'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  )
}

export default Course;