import React from 'react';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  
  return (<div>
          <span>{name}</span>
          <button onClick={onClose}>Cerrar</button>
          <span>Temp Max:{max}</span>
          <span>Temp Min:{min}</span>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
        </div>)
};