const baseURL = "http://localhost:8080/cast_crew";

export const getCastAndCrew = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedCastAndCrew = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updatedCastAndCrew = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteCastAndCrew = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createCastAndCrew = (newCastAndCrew) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newCastAndCrew),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newCastAndCrew
        }
    })
}


export const getCastAndCrewByCastAndCrewId =  (CastAndCrewId) => {
    return fetch(baseURL + "CastAndCrew?id=" + CastAndCrewId).then(res => res.json())};


