import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink className='saved-active' exact to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <div className="home-button">
      <NavLink to='/'>
      Home
      </NavLink>
    </div>
  </div>
);

export default SavedList;