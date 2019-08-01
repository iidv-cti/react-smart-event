import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './assets/index.sass';

import NotFound from './components/NotFound';

import Sobre from './pages/publico/Sobre';
import Entrar from './pages/publico/Entrar';
import Registro from './pages/publico/Registro';
import SobreEvento from './pages/publico/sobre/Evento';
import SobreInscrever from './pages/publico/sobre/Inscrever';

import AdministrarInscricoes from './pages/autenticado/administrar/Inscricoes';
import AdministrarSobre from './pages/autenticado/administrar/Sobre';
import EventosNovo from './pages/autenticado/eventos/Novo';
import EventosInscritos from './pages/autenticado/eventos/Inscritos';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)


ReactDOM.render(
  <BrowserRouter>
      <Switch>

          {/* Sobre o aplicativo e autênticação. */}
          <Route name="sobre" path="/" exact={true} component={Sobre} />
          <Route name="entrar" path="/entrar" exact={true} component={Entrar} />
          <Route name="registro" path="/registro" exact={true} component={Registro} />

          {/* Sobre o evento. */}
          <Route path="/sobre/:slug" component={SobreEvento} />
          <Route path="/sobre/:slug/inscrever" component={SobreInscrever} />

          {/* Criar eventos e ver os que você está inscrito. */}
          <PrivateRoute path="/eventos/novo" component={EventosNovo} />
          <PrivateRoute path="/eventos/inscricao" component={EventosInscritos} />
          
          {/* Controle do evento. */}
          <PrivateRoute path="/administrar/:slug/sobre" component={AdministrarSobre} />
          <PrivateRoute path="/administrar/:slug/inscricoes" component={AdministrarInscricoes} />

          {/* Erros. */}
          <Route path='*' component={NotFound} />
      </Switch>
  </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
