import React, { useState } from 'react';
import { Routes, Link, Route } from 'react-router-dom';

import './App.scss';
import { UserInfo } from './components/UserInfo/UserInfo';
import { UserList } from './components/UserList/UserList';
import { User } from './types';

export const App: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const handleClick = (user: User) => {
    setUserId(user.id);
    setUser(user)
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
        />}
      />
      <Route path={`/user/${userId}`} element={<UserInfo 
        user={user}
      />} />
    </Routes>
  </div>
  );
}
