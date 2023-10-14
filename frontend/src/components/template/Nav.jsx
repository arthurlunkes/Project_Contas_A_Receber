import './Nav.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthContext";

export default props => {
    const { logout } = useContext(AuthContext);

    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/receivables">
                    <i className="fa fa-address-book"></i> Contas a receber
                </Link>
                <Link to="/clients">
                    <i className="fa fa-users"></i> Clientes
                </Link>
                <Link onClick={() => logout()}>
                    <i className="fa fa-sign-out"></i> Logout
                </Link>
            </nav>
        </aside>
    )
}