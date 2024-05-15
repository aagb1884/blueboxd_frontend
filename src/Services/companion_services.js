const baseURL = "http://localhost:8080/companions";

export const getCompanions = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedCompanion = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updatedCompanion = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteCompanion = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createCompanion = (newCompanion) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newCompanion),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newCompanion
        }
    })
}


export const getCompanionsByCompanionId =  (CompanionId) => {
    return fetch(baseURL + "Companions?id=" + CompanionId).then(res => res.json())};


