/**
 * Dependencies
 */
import React from "react";

function Filter({ list, itemToFilter }){

  const filteredList = list?.filter((el) => el !== itemToFilter);

  return Array.isArray(list) && list.length ? (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {filteredList.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <p>Error al renderizar la lista</p>
    </div>
  );
};

export default Filter;
