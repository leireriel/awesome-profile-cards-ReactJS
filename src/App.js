import React from 'react';
import './scss/main.scss';
import Home from './Home/index';
import Card from './Card/index';
import UserProfile from './Card/Components/UserProfile';
// import {fetchCard}  from './services/CardService';
import { Route, Switch } from 'react-router-dom';


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
        palette: 1
      },
      userDefault: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
        palette: 1
      },
      isVisible: 'design',
      isAvatarDefault: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.fetchNewCard = this.fetchNewCard.bind(this);

    this.updateAvatar = this.updateAvatar.bind(this);
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
      const newId = { ...prevState.userInfo, isVisible: id };
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

  updateAvatar(img) {
    const { profile } = this.state.userInfo;
    this.setState(prevState => {
      const newProfile = { ...profile, avatar: img };
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card" component={Card} />
        <Home />
        <Card
          action={this.handleInputChange}
          userInfo={this.state.userInfo}
          isVisible={this.state.isVisible}
          actionPalettes={this.handlePalettes}
          state={this.state}
          reset={this.handleReset}
          collapse={this.handleCollapsable}
          share={this.fetchNewCard}

          avatar={this.state.userInfo.photo}
          isAvatarDefault={this.state.isAvatarDefault}
          updateAvatar={this.updateAvatar}
        />
      </Switch>
    );
  }
}
export default App;
