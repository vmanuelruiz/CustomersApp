import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customers List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route exact path="/customers/new" component={this.renderCustomerNewContainer} />
            <Route exact path="/customers/:dni" 
              render={props => <CustomerContainer dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
//exact, por ej cuando la url no matchee exactamenete con lo q nosotros le pasamos en path, no se va a ejecutar el metodo de renderizado del metodo asociacdo
// strict = true, evalua si existe una / final o no
// match, para cuando se usa wildcard
// para acceder al parametro :dni de la url /customers/:dni, debemos usar match.params.dni
//Componente SWITCH es especialemente util con rutas q pueden generar matches ambiguos o evaluaciones ambiguas..
//El primer path que haga match se hace el render.. por ende se recomiendo espeficicar las rutas mas especificar arriba y las mas generales abajo

//Componente de navegacion:
//LINK: permiten navegacion. pero NavLink permite customizarse y visualizarse de otra manera
//Redirect: para hacer redirecciones, para validar cuando un usuario no esta permitido para acceder

//WitchROuter, es un HOC, high Order Componente, rerenderiza el componente cuando las propiedades recibe un nuevo valor..
//history, es mutable, es decir no va a tener un valor estatico, sino q puede ser alterado por funciones como:
//push: agrega nueva entrada en History
//replace: modifica el ultimo elemento ungresao dne history por otro nuevo.
//go(n), goBack(), goForward(): sentencias d manejo de navegacion.. para ir adelante o hacia atras en la pila de history. go(n) donde n se le indica el numero de links hacia adelante o hacia atras para moverse
//block(), para q el user no pueda desplazarse libremente por las urls


export default App;
