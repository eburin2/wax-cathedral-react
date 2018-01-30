import React from 'react';
import Header from './Header';
import Body from './Body';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Usmaple from './Maple';



function App(){

  return(
    <div className="mainContainer">
      <Header/>
      <Switch>
        <Route exact path='/body' component={Body} />
        <Route component={Error404} />
        <Route path='/maple' component={Usmaple}/>

      </Switch>
    </div>
  );
}

export default App;
