import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from './../actions/fetchCustomers';
import { getCustomers } from './../selectors/customers';

class CustomersContainer extends Component {
 
    componentDidMount() {
        if(this.props.customers.length === 0){
            this.props.fetchCustomers(); //Aqui cargo los clientes de mi proyecto
        }
    }
    
    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );
    
    render() {
        return (
            <div>
                <AppFrame header={'Listado de Clientes'}
                body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
}

/*
const mapDispatchToProps = dispatch => (
    {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
);
*/
//o lo puedo reemplazar por fetchCustomers directamente, ya que dentro ya creo toda la accion usando redux-action:
//const mapDispatchToProps = { fetchCustomers };

const mapStateToProps = state => ({
    customers: getCustomers(state)  //getCustomers funcion que retorna los customers del state, en principio es un selector
});

//o mejor aun, mandar el fetchCustomers, directo como 2do parametro de la funcion conect:
//export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));