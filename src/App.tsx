import React, { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import './App.scss';
import { UserInfo } from './components/UserInfo/UserInfo';
import { UserList } from './components/UserList/UserList';

export const App: React.FC = () => {
  const [userId, setUserId] = useState(0);

  const handleClick = (id: number) => {
    setUserId(id);
  }

  return (
  <div>
    <h1>

      <Link to="">
        Home
      </Link>
    </h1>
    
    <Routes>
      <Route path="" element={
      <UserList
        handleClick={handleClick}
      />
      } />
      <Route path={`/user/${userId}`} element={<UserInfo />} />
    </Routes>
  </div>
  );
}
