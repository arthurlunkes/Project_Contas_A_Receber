import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteLogin } from './Routes';
import { AuthContext } from '../contexts/AuthContext';
import Home from '../pages/home/Home';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {auth ? (
        <Home />
      ) : (
        <RouteLogin />
      )}
    </BrowserRouter>
  );
};

export default App;
