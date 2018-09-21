import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { insertCustomer } from "./../actions/insertCustomer";
import { SubmissionError } from "redux-form";

class NewCustomerContainer extends Component {

    hadleSubmit = values => {
        return this.props.insertCustomer(values).then( r=> {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.hadleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack} />
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={'Nuevo Cliente'}
                    body={this.renderBody()} />
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));