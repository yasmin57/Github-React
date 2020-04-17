import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importe das paginas
import Main from './pages/main';
import Repository from './pages/repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch //garante que apenas uma rota seja chamada por momento
      >
        <Route
          path="/"
          //Exact diz que a rota deve ser examente essa e
          //não apenas começar dessa maneira
          exact
          component={Main}
        />
        <Route path="/repository/:repository" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
