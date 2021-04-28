const REQUEST_URL = "https://www.diegollanes.ml/api";

export const fetchNotes = async () => {
  return fetch(REQUEST_URL)
    .then(response => response.json())
    .then(data => data)
    .catch( error => console.log(error, "Error in fetching instruction"));
};