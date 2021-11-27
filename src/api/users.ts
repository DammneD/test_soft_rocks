import { CreatedUser, updatedUser, User } from "../types";

const USERS_URL = 'https://mate.academy/students-api/users';

export async function loadUsers():Promise<User[]> {
  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error(`Opps... ${response.status}: ${response.statusText}`);
  }

  const users = await response.json();

  return users;
};

export async function loadUser(id: number):Promise<User> {
  const response = await fetch(`${USERS_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Opps... ${response.status}: ${response.statusText}`);
  }

  const user = await response.json();

  return user;
};

export async function uploadUser(user: CreatedUser) {
  const upload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user)
  }

  try {
    await fetch(USERS_URL, upload);
  } catch (error) {
    throw new Error(`Opps... ${error}`);
  }
};

export async function deleteUser(id: number) {
  try {
    await fetch(`${USERS_URL}/${id}`, {method: 'DELETE'});
  } catch (error) {
    throw new Error(`Opps... ${error}`);
  }
};

export async function updateUser(userData: updatedUser) {
  const update = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userData)
  }
  try {
    await fetch(`${USERS_URL}/${userData.id}`, update);
  } catch (error) {
    throw new Error(`Opps... ${error}`);
  }
};
