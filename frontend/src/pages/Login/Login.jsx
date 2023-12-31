import './Login.css';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate, useNavigation } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const { auth, setTokenInGlobal } = useContext(AuthContext);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const navigateToHome = () => {
    useNavigation("/home");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      login: username,
      password: password
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
      if (response.data.token) {
        setTokenInGlobal(response.data.token);
      }
    }).catch(error => {
      console.log("Error ========>", error);
      alert("Usuário ou senha incorreto!")
    });
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      login: username,
      password: password,
      role: isAdmin ? "ADMIN" : "USER"
    };

    await axios.post(
      'http://localhost:8080/auth/register',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log("Success ========>", response);
      if (response.status === 200) {
        alert("Usuaário cadastrado com sucesso!");
      }
    }).catch(error => {
      console.log("Error ========>", error);
      alert("error" + error);
    });
  };

  if (auth) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="backgroud">
      <div className="login-container">
        <div className="tabs">
          <span
            id='tab1'
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >Login</span>
          <span
            id='tab2'
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >Registre-se</span>
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
                onChange={e => setPassword(e.target.value)}
              />
              <label>Admin?
                <input
                  type="checkbox"
                  value={isAdmin}
                  onChange={e => setIsAdmin(e.target.checked)}
                />
              </label>
              <button className='btn btn-primary' onClick={e => handleRegister(e)}>Registrar</button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;