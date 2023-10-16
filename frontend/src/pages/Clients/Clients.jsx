import './Clients.css'
import React, { useState, useEffect, useContext } from 'react';
import Main from "../../components/template/Main";
import { getClients, getClient, deleteClient, saveClient } from "../../services/AxiosService";
import { AuthContext } from "../../contexts/AuthContext";

const headerProps = {
  icon: 'users',
  title: 'Clientes',
  subtitle: 'Lista os clientes'
}

const ClientsPage = () => {
    const { logout } = useContext(AuthContext);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients()
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                if(error.response.status === 403){
                    alert("Sessão expirada");
                    logout();
                }
            })
    }, []);

    return (
        <Main {...headerProps}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Tipo do cliente</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.typeClient}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Main>
    )
}

export default ClientsPage;