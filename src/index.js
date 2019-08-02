import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import App from './main/App'
/*
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

*/
ReactDOM.render(<App></App>
  
 
  
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
