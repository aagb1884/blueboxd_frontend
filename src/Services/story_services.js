export const baseURLstories = "http://localhost:8080/stories";

export const getStories = () => {
  return fetch(baseURLstories).then((res) => res.json());
};


export const updateStory = (id, payload) => {
  return fetch(baseURLstories + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteStory = (id) => {
  return fetch(baseURLstories + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createStory = (newStory) => {
    return fetch(baseURLstories, {
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
    return fetch(baseURLstories + "users?id=" + userId).then(res => res.json())};

export const getStoriesWantToRead = (userId) => {
    return fetch(baseURLstories + "users/" + userId + "/wanttoread")
      .then(res => res.json())};

export const getStoriesCurrentlyReading = (userId) => {
    return fetch(baseURLstories + "users/" + userId + "/currentlyreading").then(res => res.json())};
 
export const getStoriesHaveRead = (userId) => {
    return fetch(baseURLstories + "users/" + userId + "/haveread").then(res => res.json())};

export const getStoriesBystoryId =  (storyId) => {
    return fetch(baseURLstories + "stories?id=" + storyId).then(res => res.json())};


