import React from 'react';
import Film from './Film';

function FilmList({ id, name, url }){
  return(
    <div>
    <h1>FILM LIST</h1>
    <Film/>
    </div>
  )
}

export default FilmList;
