import './Login.css'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const { auth, setAuth } = useContext(AuthContext);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      login: username,
      password: password,
    };
  
    await axios.post(
      'http://localhost:8080/auth/login',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log("Success ========>", response);
      if(response.data.token !== null){
        setAuth(true);
      }
    }).catch(error => {
      console.log("Error ========>", error);
      alert("Usuário ou senha incorreto!")
    });
  };
  

  const handleRegister = () => {
    // Implemente aqui a lógica de registro
    // Verifique as credenciais do usuário e atualize o estado de autenticação no contexto

    // Exemplo básico: Verificação de usuário "admin" e senha "admin"
  };

  if (auth) { // Se o usuário estiver autenticado, redirecione para a rota "/home"
    return <Navigate to="/home" />;
  }

  return (
    <div className="backgroud">
      <div className="login-container">
        <div className="tabs">
          <p
            id='tab1'
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >Login</p>
          <p
            id='tab2'
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >Registre-se</p>
        </div>
        {activeTab === "tab1" ?
          <div>
            <h2>Login</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
          </div>
          :
          <div>
            <h2>Registre-se</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="checkbox">
                <input
                  id="isAdmin"
                  type="checkbox"
                  name="Admin?"
                  value={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.value)}
                />
                <label for="isAdmin">Admin?</label>
              </div>
              <button className='btn btn-primary' onClick={handleRegister}>Registrar</button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;