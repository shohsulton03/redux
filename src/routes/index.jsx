import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Users from '../pages/users/Users'
import CreateUser from '../pages/create-user/CreateUser'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/users" element={<Users />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}

export default Router