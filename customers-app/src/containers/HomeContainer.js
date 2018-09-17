import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("handleOnCLick");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home"
                    body={
                        <div>
                            Esta es la pantalla Inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    } />
            </div>
        );
    }
}

HomeContainer.propTypes = {
    
};

//withRouter es un decorator, agrega funcionalidad al componente, agregando las propiedades de props (history, etc..) 
//q no le da la funcion al llamar al componente. Consejo, poner siempre withRouter para que siempre el componente cuente con 
//las propiedades de history, etc en props
export default withRouter(HomeContainer); 