import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import './App.scss';
import { UserInfo } from './components/UserInfo';
import { UserList } from './components/UserList/UserList';

export const App: React.FC = () => {

  return (
  <div>
    <h1>
      <Link to="/user">
        UserInfo
      </Link>
      <Link to="/">
        Home
      </Link>
    </h1>
    
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user" element={<UserInfo />} />
    </Routes>
  </div>
  );
}
