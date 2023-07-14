import React, { useState, useContext } from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { auth ,setAuth } = useContext(AuthContext);

  const handleLogin = () => {
    // Implemente aqui a lógica de login
    // Verifique as credenciais do usuário e atualize o estado de autenticação no contexto

    // Exemplo básico: Verificação de usuário "admin" e senha "admin"
    if (username === 'admin' && password === 'admin') {
      setAuth(true); // Atualize o estado de autenticação para "true"
    }
  };

  if (auth) { // Se o usuário estiver autenticado, redirecione para a rota "/home"
    return <Navigate to="/home" />;
  }

  return (
    <div className="backgroud">
    <div className="login-container">
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
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;