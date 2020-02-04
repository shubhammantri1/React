import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Lessons from './pages/Lessons';
import Home from './pages/Home';

function App(){
  return (
      <main className="container-fluid">
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/lessons" component={Lessons} />
              <Route component={Error} />
          </Switch>
      </main>
  )
}


export default App;
