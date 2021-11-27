import React, { useState } from 'react';
import { uploadUser } from '../../api/users';
import './UserCreate.scss'

interface Props {
  getUsers: () => void;
}

export const UserCreate: React.FC<Props> = ({ getUsers }) => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setMail] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  const clearInput = () => {
    setName('');
    setUserName('');
    setMail('');
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name.length) {
      const newUser = {
        name,
        username,
        email,
      };
  
      await uploadUser(newUser);
      getUsers();
      clearInput();
    }

    setIsRequired(true);
  }

  return (
    <form
        method="GET"
        className="creationForm"
        onSubmit={handleSubmit}
      >
        <fieldset className="creationForm__wrap">
          <legend>Add new contact</legend>
          <label htmlFor="newName" className="creationForm__label">
            Name*:
            <input
              className={`creationForm__field ${isRequired && 'active'}`}
              placeholder="Enter name"
              id="newName"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                setIsRequired(false)
              }}
            />
          </label>

          <label htmlFor="newSurname" className="creationForm__label">
            Surname:
            <input
              className="creationForm__field"
              placeholder="Enter surname"
              id="newSurname"
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>

          <label htmlFor="newEmail" className="creationForm__label">
            Mail:
            <input
              className="creationForm__field"
              placeholder="myMail@mail.com"
              id="newEmail"
              type="text"
              value={email}
              onChange={(event) => setMail(event.target.value)}
            />
          </label>

          <button
            className="creationForm__button button"
            type="submit"
          >
            Add user
          </button>
        </fieldset>
      </form>
  )
}