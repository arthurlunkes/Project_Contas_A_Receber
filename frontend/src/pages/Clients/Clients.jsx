import './Clients.css'
import React from 'react';
import Main from "../../components/template/Main";

const headerProps = {
  icon: 'users',
  title: 'Clientes',
  subtitle: 'Lista os clientes'
}

const ClientsPage = () => {
    return (
        <Main {...headerProps}>
            <p>Teste</p>
        </Main>
    )
}

export default ClientsPage;