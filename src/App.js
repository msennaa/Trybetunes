import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TunesProvider from './context/TunesProvider';
import Login from './pages/Login';
import Search from './pages/Search';

export default function App() {
  return (
    <TunesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/search" exact component={ Search } />
        </Switch>
      </BrowserRouter>
    </TunesProvider>
  );
}
