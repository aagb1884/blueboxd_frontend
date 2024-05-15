const baseURL = "http://localhost:8080/doctors";

export const getDoctors = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getSelectedDoctor = (id) => {
  return fetch(baseURL + '/' + id).then(res => res.json())
}

export const updatedDoctor = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};

export const deletedoctor = (id) => {
  return fetch(baseURL + '/' + id, {
    method: "DELETE",
  })
  .then(res => res.json())
};

export const createdoctor = (newDoctor) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newDoctor),
        headers: { 'Content-Type': "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        return {
        ...data,
        ...newDoctor
        }
    })
}


export const getdoctorsBydoctorId =  (doctorId) => {
    return fetch(baseURL + "doctors?id=" + doctorId).then(res => res.json())};


