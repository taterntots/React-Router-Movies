import React, { useState } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Switch>
  <Route path='/movies/:dataID' render={props => <Movie {...props}/> }/>
      </Switch>
    </div>
  );
};

// function Child() {
//   let { dataID } = useParams();
// }

export default App;