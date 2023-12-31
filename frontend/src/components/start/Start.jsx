import React from 'react'
import Main from '../../components/template/Main'

const Start = () => {
    return (
    <Main icon="home" title="Início"
        subtitle="Sistema de contas a receber.">
        <div className='display-4'>Seja bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para testar REST api de java com spring e React, de contas a receber.</p>
    </Main>
    );
};

export default Start;