import React from 'react';

function Film({ name, url }) {
  return (
    <ul>
    <h4>
    <a href={url} className="film-list">{name}</a></h4>
    </ul>
  );
}

export default Film;
