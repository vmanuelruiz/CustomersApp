import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    //<p>Datos del cliente: {this.props.customer.name}</p>
    renderBody = () => (
        //El sig route india que si la URL hace match con el path, match se pone en TRUE y se agrega el tag p dependiendo si es o no edicion
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl { ...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onBack={this.handleOnBack}
                    />
                //const CustomerControl = match ? CustomerEdit : CustomerData;
                //return <CustomerControl {...this.props.customer} />
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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
    //customer: state.customers.find( c => c.dni === props.dni)
});

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));