import React from 'react';
import Header from './Header';
import Body from './Body';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';





function App(){

  return(
    <div className="mainContainer">
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
