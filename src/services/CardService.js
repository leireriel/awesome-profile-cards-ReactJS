const API = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const fetchCard = () => {
  fetch(API, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.userInfo)
  })
    .then(response => response.json());
  }

export { fetchCard };

