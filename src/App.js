import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import NotFound from './Components/NotFound';
import TodoFeatures from './Features/Todo';

function App() {

  return (
    <div className="App">

      <Switch>
        <Redirect from="/home" to="/"></Redirect>

        <Route path="/" component={TodoFeatures} exact/>
        <Route path="/todos" component={TodoFeatures}/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
