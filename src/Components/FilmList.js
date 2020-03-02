import React from 'react';
import Film from './Film';

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
  <div>
  <h1>FILM LIST</h1>
  <ul>
  {filmComponents}
  </ul>
  </div>
)
}


export default FilmList;
