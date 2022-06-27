import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
            <input
              type='text'
              placeholder='Enter city'
            />
            <button onClick={onSearch}>
              Agregar
            </button>
          </div>
};