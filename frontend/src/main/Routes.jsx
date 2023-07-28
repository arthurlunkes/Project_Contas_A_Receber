import React from 'react'
import { Route, Routes, Navigate } from 'react-router'

import Start from '../components/start/Start'
import UserCrud from '../components/user/UserCrud'
import Login from '../pages/Login/Login'

export const RouteLogin = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
)

const RoutesApp = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Start />} />
    <Route path="/receivables" element={<UserCrud />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
)

export default RoutesApp
