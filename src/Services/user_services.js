export const baseUsersURL = "http://localhost:8080/users";

export const getUsers = () => {
  return fetch(baseUsersURL).then((res) => res.json());
};

export const getSelectedUser = (id) => {
  return fetch(baseUsersURL + '/' + id).then(res => res.json())
}

export const updateUser = async (id, payload) => {
  const response = await fetch(baseUsersURL + '/' + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error('Failed to update following list');
  }

  return response.json();
};

export const deleteUser = (id) => {
  return fetch(baseUsersURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createUser = (newUser) => {
    return fetch(baseUsersURL, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newUser
        }
    })
}

export const getUserById =  (userId) => {
    return fetch(baseUsersURL + "users?id=" + userId).then(res => res.json())};





