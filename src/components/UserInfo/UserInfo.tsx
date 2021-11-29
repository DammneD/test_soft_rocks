import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadUser, updateUser } from '../../api/users';
import { User } from '../../types';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import './UserInfo.scss'

interface Props {
  id: number;
}

type UserKey = 'name' | 'username' | 'email' | 'phone' | 'website';

export const UserInfo: React.FC<Props> = ({ id }) => {
  const [user, setUser] = useState<User>({
    id,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    username: true,
    email: true,
    phone: true,
    website: true,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [temp, setTemp] = useState({});
  const [dataToUpdate, setdataToUpdate] = useState({});
  const [isReturnButtodDisabled, setisReturnButtodDisabled] = useState(true);

  const changeButtonText = (inputName: UserKey) => isDisabled[inputName] ? 'Change' : 'Apply';

  const getUser = async () => {
    const user = await loadUser(id)
    setUser(user)
  };

  useEffect(() => {
      getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = () => {
    updateUser({ 
      id, 
      ...dataToUpdate});
    setisReturnButtodDisabled(false)
    setModalVisible(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setUser(state => ({ ...state, [name]: value }))
  }

  const changeInput = (inputName: UserKey) => {
    if (isDisabled[inputName]) {
      setTemp({ [inputName]: user[inputName] ? user[inputName] : '' })
      setIsDisabled({
        name: true,
        username: true,
        email: true,
        phone: true,
        website: true,
        [inputName]: false
      });
      setPrevState();
    }
    if (!isDisabled[inputName]) {
      setModalVisible(true)
      setdataToUpdate({ [inputName]: user[inputName] })
      setIsDisabled(state => ({ ...state, [inputName]: true }));
    }
  }

  const setPrevState = (isUpdateFromApi?: boolean) => {
    setUser(state => ({ ...state, ...temp }));
    setModalVisible(false);

    if (isUpdateFromApi) {
      updateUser({ id, ...temp });
      setisReturnButtodDisabled(true)
    }
  }

  return (
    <>
    <h2 className="home-link">
      <Link to="/" className="link">
        {`> Click to go back <`}
      </Link>
    </h2>
    <form
      method="POST"
      className="infoForm"
      onSubmit={(event => event.preventDefault())}
    >
      <label htmlFor="name" className="infoForm__label">
        Name:
        <input
          className="infoForm__field"
          id="name"
          disabled={isDisabled.name}
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
        />
        <button
          type="button"
          className="button"
          onClick={() => changeInput("name")}
        >
          {changeButtonText("name")}
        </button>
      </label>

      <label htmlFor="surname" className="infoForm__label">
        Surname:
        <input
          className="infoForm__field"
          id="surname"
          disabled={isDisabled.username}
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => changeInput("username")}
          className="button"
        >
          {changeButtonText("username")}
        </button>
      </label>

      <label htmlFor="email" className="infoForm__label">
        Email:
        <input
          className="infoForm__field"
          id="email"
          disabled={isDisabled.email}
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <button
          type="button"
          className="button"
          onClick={() => changeInput("email")}
        >
          {changeButtonText("email")}
        </button>
      </label>

      <label htmlFor="phone" className="infoForm__label">
        Phone:
        <input
          className="infoForm__field"
          id="phone"
          disabled={isDisabled.phone}
          name="phone"
          type="tel"
          value={user.phone}
          onChange={handleChange}
        />
        <button
          type="button"
          className="button"
          onClick={() => changeInput("phone")}
        >
          {changeButtonText("phone")}
        </button>
      </label>

      <label htmlFor="website" className="infoForm__label">
        Website:
        <input
          className="infoForm__field"
          id="website"
          disabled={isDisabled.website}
          name="website"
          type="text"
          value={user.website}
          onChange={handleChange}
        />
        <button
          type="button"
          className="button"
          onClick={() => changeInput("website")}
        >
          {changeButtonText("website")}
        </button>
      </label>
      <button
        className="infoForm__button button"
        disabled={isReturnButtodDisabled}
        type="button"
        onClick={() => setPrevState(true)}
      >
        Return last changed value
      </button>
    </form>
    {isModalVisible
      && <ModalWindow
        setModalVisible={setModalVisible}
        handleSubmit={handleSubmit}
        setPrevState={setPrevState}
      />
    }
    </>
  )
}

