import React from 'react';
import Header from './Header';
import Body from './Body';
import AlbumList from './AlbumList';
import { Switch, Route } from 'react-router-dom';



function App(){

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/body' component={Body} />
        <Route exact path='/albumlist' component={AlbumList} />
      </Switch>
    </div>
  );
}

export default App;
