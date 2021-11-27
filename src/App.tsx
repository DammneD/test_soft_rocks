import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
    <Routes>
      <Route path="/" element={
        <UserList
          getUserId={handleClick}
        />}
      />
      <Route path={`user/${userId}`} element={<UserInfo 
        id={userId}
      />} />
    </Routes>
  </div>
  );
}
