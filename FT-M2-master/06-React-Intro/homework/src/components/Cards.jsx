import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (<div>
            {cities.map((e,index)=>{
              return <Card
                          key={index}  
                          max={e.main.temp_max}
                          min={e.main.temp_min}
                          name={e.name}
                          img={e.weather[0].icon}
                          onClose={() => alert(e.name)}
                      />
              })
            }
        </div>)
};