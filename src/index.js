import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Page from './Page';
import SpreadRoute from './Spread';

export const AppContext = createContext({})

const App = () =>
  <AppContext.Provider value={useState(AppContext)}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/spread" component={SpreadRoute} />
      </Switch>
    </HashRouter>
  </AppContext.Provider>

ReactDOM.render(<App />, window.app);