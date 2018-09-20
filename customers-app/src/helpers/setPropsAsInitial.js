import React, { Component } from 'react';

export const setPropsAsInitial = WrappedComponent => (
     class extends Component{
         render(){
             //initialValues solo funciona una vez, es decir, solo la primera vez que se hrenderiza el componente
             // el parametro enableReinitialize, podriamos utilizarlo para q fuerce la reinicializacion de los props nuevamente
             return <WrappedComponent {...this.props}
              initialValues = {this.props} enableReinitialize />
         }
     }

); 