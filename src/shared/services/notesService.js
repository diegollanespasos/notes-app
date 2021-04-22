const REQUEST_URL = "http://3.21.165.187/api";

export const fetchNotes = async () => {
  return fetch(REQUEST_URL)
    .then(response => response.json())
    .then(data => data)
    .catch( error => console.log(error, "Error in fetching instruction"));
};

/*
export const fetchNotes = () => {
  return [
    {
      id: 1,
      title: 'First Note', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      date: '20-04-2021'
    },
    {
      id: 2,
      title: 'SecondNote', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      date: '15-03-2021'
    },
    {
      id: 3,
      title: 'Third Note', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      date: '27-04-2021'
    },
    {
      id: 4,
      title: 'Fourth Note', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      date: '02-05-2021'
    }
  ]
};
*/