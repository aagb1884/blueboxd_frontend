export const baseUserStoryURL = "http://localhost:8080/user_stories";

export const getUserStories = () => {
  return fetch(baseUserStoryURL).then((res) => res.json());
};

export const getSelectedUserStory = (id) => {
  return fetch(baseUserStoryURL + '/' + id).then(res => res.json())
}

export const updateUserStory = (id, payload) => {
  return fetch(baseUserStoryURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteUserStory = (id) => {
  return fetch(baseUserStoryURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createUserStory = (newUserStory) => {
    return fetch(baseUserStoryURL, {
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


export const getUserStoryByUserId =  (userId) => {
    return fetch(baseUserStoryURL + "/users?id=" + userId).then(res => res.json())};

export const getUserStoryByUserReviews =  (userID) => {
    return fetch(baseUserStoryURL + "/users/" + userID + "/reviews")
    .then(res => res.json())};

export const getUserStoryByUserWatchlist =  (userID) => {
    return fetch(baseUserStoryURL + "/users/" + userID + "/watchlist")
    .then(res => res.json())};
