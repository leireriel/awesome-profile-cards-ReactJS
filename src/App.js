import React from 'react';
import './scss/main.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/index';
import Card from './Card/index';
import userProfile from './Card/Components/userProfile';
import { fetchCard } from './Services/fetchCard';

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
        photo: userProfile,
        palette: 1
      },
      userDefault: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: userProfile,
        palette: 1
      },
      isVisible: 'design',
      isAvatarDefault: true,
      urlAPI: '',
      loading: false,
      fetch: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.saveData = this.saveData.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.fetchNewCard = this.fetchNewCard.bind(this);
    this.createTweet = this.createTweet.bind(this);
  }

  componentDidMount() {
    const getItem = JSON.parse(localStorage.getItem('cardSaved'));
    if (getItem !== null) {
      this.setState({
        userInfo: getItem
      });
      if (getItem.photo !== null) {
        this.setState({
          isAvatarDefault: true
        });
      }
    }
  }

  updateAvatar(img) {
    const { userInfo } = this.state;
    this.setState(prevState => {
      const newProfile = { ...userInfo, photo: img };
      this.saveData(newProfile);
      return {
        userInfo: newProfile,
        isAvatarDefault: false
      };
    });
  }

  handleInputChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo };
      newUser[id] = value;
      this.saveData(newUser);
      return { userInfo: newUser };
    });
  }

  handlePalettes(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState((prevState, props) => {
      const newPalettes = { ...prevState.userInfo, palette: value };
      this.saveData(newPalettes);
      return { userInfo: newPalettes };
    });
  }
  saveData(obj) {
    localStorage.setItem('cardSaved', JSON.stringify(obj));
  }

  handleReset() {
    this.saveData(this.state.userDefault);
    this.setState((prevState, props) => {
      return {
        userInfo: this.state.userDefault,
        isAvatarDefault: true,
        urlAPI: ''
      };
    });
  }

  handleCollapsable(e) {
    const newVisible = e.currentTarget.getAttribute('data-id');
    this.setState((prevState, props) => {
      if (newVisible === prevState.isVisible) {
        return { isVisible: null };
      } else {
        return {
          isVisible: newVisible
        };
      }
    });
  }

  createTweet(url) {
    const twitterLinkBtn = document.querySelector('.share__btn--twitter');
    const twitterLink = 'https://twitter.com/intent/tweet';
    const hashtags = 'AdalabDigital,adalabers,unicodes,gorkapower';
    const text =
      'Check%20out%20my%20new%20online%20business%20card%20from%20Awesome%20Profile%20Cards!%20';
    const tweet = `${twitterLink}?text=${text};hashtags=${hashtags}%20${url}`;
    twitterLinkBtn.href = tweet;
  }

  fetchNewCard(event) {
    this.setState({
      loading: true
    });
    const getItem = JSON.parse(localStorage.getItem('cardSaved'));
    event.preventDefault();
    fetchCard(getItem)
    .then(data => {
      this.setState({
        urlAPI: data.cardURL
      });
      this.createTweet(data.cardURL);
    })
    .catch(error => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      this.setState({
        fetch: true
      });
    });
  }

  render() {
    console.log('obj', this.state);
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/card"
            render={() => (
              <Card
                action={this.handleInputChange}
                userInfo={this.state.userInfo}
                actionPalettes={this.handlePalettes}
                state={this.state}
                reset={this.handleReset}
                collapse={this.handleCollapsable}
                isAvatarDefault={this.state.isAvatarDefault}
                updateAvatar={this.updateAvatar}
                actionShare={this.fetchNewCard}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
