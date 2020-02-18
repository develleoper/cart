import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import './index.css';
import Page from './Page';
import SpreadRoute from './Spread';

export const AppContext = createContext({})

const IndexPage = () =>
  <Page>
    <Link to="/spread/daily">Daily</Link>
    <Link to="/spread/standard">Standard</Link>
    <Link to="/spread/cross">Cross</Link>
      <Link to="/spread/celtic-cross">Celtic Cross</Link>

const App = () =>
  <AppContext.Provider value={useState(AppContext)}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/spread" component={SpreadRoute} />
      </Switch>
    </HashRouter>
  </AppContext.Provider>

ReactDOM.render(<App />, window.app);