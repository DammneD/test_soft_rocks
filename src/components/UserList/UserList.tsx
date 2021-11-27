import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, loadUsers } from '../../api/users';
import { User } from '../../types';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { UserCreate } from '../UserCreate/UserCreate';
import './UserList.scss'

interface Props {
  getUserId: (id: number) => void;
}

export const UserList: React.FC<Props> = ({ getUserId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState(0);

  const getUsers = async () => {
    const users = await loadUsers()
    setUsers(users.reverse())
  };

  useEffect(() => {
    getUsers();
  }, [])

  const deleteItem = () => {
    deleteUser(userId)
    setUsers(users.filter(person => person.id !== userId))
    setModalVisible(false)
  }

  const handleClick = (id: number) => {
    setUserId(id)
    setModalVisible(true)
  }


  return (
    <div className="users">
      <UserCreate 
        getUsers={getUsers}
      />
      <ul className="users__list">
        {users.map(user => (
          <li key={user.id} className="users__list_item">
            <div className="users__info-block">
              <h3 className="users__list_title">{user.name}</h3>
              {user.email
                && (
                  <p className="users__list_mail">Mail:&nbsp;
                    <a href={`mailto:${user.email}`} className="link">
                      {user.email}
                    </a>
                  </p>
                )
              }
            </div>
            <div className="users__button-block">
              <Link
                className="users__info-button button link"
                to={`user/${user.id}`}
                onClick={() => getUserId(user.id)}
              >
                User details
              </Link>
              <button
                className="users__delete-button button"
                type="button"
                onClick={() => handleClick(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalVisible && <ModalWindow
        setModalVisible={setModalVisible}
        deleteItem={deleteItem}
      />}
    </div>
  )
}
