import React from 'react'
import { Routes, Route, Navigate } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receivables" element={<UserCrud />} />
        <Route path="*" element={<Navigate to="/home" />} />
    </Routes>