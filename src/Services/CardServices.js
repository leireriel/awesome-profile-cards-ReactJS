const api = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const fetchCard = () => {
  fetch(api, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.userInfo)
  }).then(response => response.json());
};

export { fetchCard };
