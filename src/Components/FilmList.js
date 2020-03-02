import React from 'react';
import Film from './Film';
import './FilmList.css';

function FilmList({ films}){

const filmComponents = films.map(film => {
  return (
    <Film
    key={film.id}
    name={film.name}
    url={film.url}>
    </Film>
  )
})

return(
  <ul className="film-list">
  {filmComponents}
  </ul>
)
}


export default FilmList;
