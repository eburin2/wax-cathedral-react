import React from 'react';
import Header from './Header';
import Body from './Body';
import AlbumList from './AlbumList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
// import Splash from './splash';



function App(){

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/body' component={Body} />
        <Route exact path='/albumlist' component={AlbumList} />
        <Route component={Error404} />

      </Switch>
    </div>
  );
}

export default App;
