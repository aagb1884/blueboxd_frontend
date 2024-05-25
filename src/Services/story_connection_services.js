const baseURL = "http://localhost:8080/user_stories";

export const getUserStories = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedUserStory = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updateUserStory = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteUserStory = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createUserStory = (newUserStory) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newUserStory),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newUserStory
        }
    })
}


export const getUserStoryByUserStoryId =  (UserStoryId) => {
    return fetch(baseURL + "UserStory?id=" + UserStoryId).then(res => res.json())};


