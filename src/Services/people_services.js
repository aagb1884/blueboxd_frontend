const baseURL = "http://localhost:8080/people";

export const getPeople = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedPerson = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updatedPerson = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deletePerson = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createPerson = (newPerson) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newPerson
        }
    })
}


export const getPersonByPersonId =  (PersonId) => {
    return fetch(baseURL + "Person?id=" + PersonId).then(res => res.json())};


