import React from 'react';
import './scss/main.scss';
// import Home from './Home/index';
import Card from './Card/index';
import {fetchCard}  from './services/CardService';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: 1,
        isVisible: 'design'
      },
      userDefault: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: 1,
        isVisible: 'design'
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.fetchNewCard=this.fetchNewCard.bind(this);
  }

  handleInputChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo };
      newUser[id] = value;
      return { userInfo: newUser };
    });
  }

  handlePalettes(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState((prevState, props) => {
      const newPalettes = { ...prevState.userInfo, palette: value };
      return { userInfo: newPalettes };
    });
  }

  handleReset() {
    this.setState((prevState, props) => {
      return { userInfo: this.state.userDefault };
    });
  }

  handleCollapsable(e) {
    const id = e.currentTarget.id;
    this.setState((prevState, props) => {
      const newId = {...prevState.userInfo, isVisible: id};
      return {
        userInfo: newId
       };
    });
  }


  fetchNewCard() {
    const API = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
    fetch(API, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.userInfo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.cardURL);
        })
  }


  render() {
    return (
      <Card
        action={this.handleInputChange}
        userInfo={this.state.userInfo}
        actionPalettes={this.handlePalettes}
        state={this.state}
        reset={this.handleReset}
        collapse={this.handleCollapsable}
        share={this.fetchNewCard}
      />
    );
  }
}
export default App;
