import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from './../actions/fetchCustomers';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customer/'}>
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

//o mejor aun, mandar el fetchCustomers, directo como 2do parametro de la funcion conect:
//export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
export default withRouter(connect(null, { fetchCustomers })(CustomersContainer));