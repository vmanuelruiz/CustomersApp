import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({header, body}) => { //por destructuring obtengo esos argumentos del props
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header} />
                <div>{body}</div>
                <div>Aplicación Simple de Ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;