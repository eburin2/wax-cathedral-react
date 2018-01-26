import React from 'react';
import Header from './Header';
import Body from './Body';
import Profile from './Profile';
import AlbumList from './AlbumList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';



function App(){

  return(
    <div>
      <Header/>
      <Profile/>
      <Switch>
        <Route exact path='/body' component={Body} />
        // <Route exact path='/' component={AlbumList} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
