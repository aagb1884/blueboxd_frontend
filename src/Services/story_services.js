const baseURL = "http://localhost:8080/stories";

export const getStories = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedStory = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updateStory = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteStory = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createStory = (newStory) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newStory),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newStory
        }
    })
}

export const getStoriesByUserId =  (userId) => {
    return fetch(baseURL + "users?id=" + userId).then(res => res.json())};

export const getStoriesWantToRead = (userId) => {
    return fetch(baseURL + "users/" + userId + "/wanttoread")
      .then(res => res.json())};

export const getStoriesCurrentlyReading = (userId) => {
    return fetch(baseURL + "users/" + userId + "/currentlyreading").then(res => res.json())};
 
export const getStoriesHaveRead = (userId) => {
    return fetch(baseURL + "users/" + userId + "/haveread").then(res => res.json())};

export const getStoriesBystoryId =  (storyId) => {
    return fetch(baseURL + "stories?id=" + storyId).then(res => res.json())};


