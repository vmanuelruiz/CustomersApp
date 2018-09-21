import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import {fetchCustomers} from './../actions/fetchCustomers';
import {updateCustomer} from './../actions/updateCustomer';
import { SubmissionError } from "redux-form";

class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    
    handleSubmit = values => {
        console.log(JSON.stringify(values));
        const { id } = values;
        return this.props.updateCustomer(id, values).then( r => {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        }); //hago return aqui xq esto recibe una promise y necesito devolverla para 
        //que el boton aceptar se bloquee mientras la promise no se termine de realizar.
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    //<p>Datos del cliente: {this.props.customer.name}</p>
    renderBody = () => (
        //El sig route india que si la URL hace match con el path, match se pone en TRUE y se agrega el tag p dependiendo si es o no edicion
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                //if(this.props.customer){
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer} 
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack}
                        />
                    //const CustomerControl = match ? CustomerEdit : CustomerData;
                    //return <CustomerControl {...this.props.customer} />
                //}
                //return null;
            }
        } />
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente: ${this.props.dni}`} 
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
    //customer: state.customers.find( c => c.dni === props.dni)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers, updateCustomer
})(CustomerContainer));