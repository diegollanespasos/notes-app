const REQUEST_URL = "http://3.18.221.202/api";

export const fetchNotes = async () => {
  return fetch(REQUEST_URL)
    .then(response => response.json())
    .then(data => data)
    .catch( error => console.log(error, "Error in fetching instruction"));
};