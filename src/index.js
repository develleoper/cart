import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Page from './Page';
import SpreadRoute from './Spread';

export const AppContext = createContext({})

const App = () =>
  <AppContext.Provider value={useState(AppContext)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/spread" component={SpreadRoute} />
      </Switch>
    </BrowserRouter>
  </AppContext.Provider>

ReactDOM.render(<App />, window.app);