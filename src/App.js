import React from 'react';
import './scss/main.scss';
// import Home from './Home/index';
import Card from './Card/index';
import userProfile from './Card/Components/userProfile';

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
      isAvatarDefault: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.saveData = this.saveData.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  componentDidMount() {
    const getItem= JSON.parse(localStorage.getItem('cardSaved'));
    if(getItem !== null) {
      this.setState({
      userInfo: getItem
      });
    }
  }

  updateAvatar(img) {
    const {userInfo} = this.state;
    this.setState(prevState => {
      const newProfile = {...userInfo, photo: img};
      return {
        userInfo: newProfile,
        isAvatarDefault: false
      }
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

  saveData(obj) {
    localStorage.setItem('cardSaved', JSON.stringify(obj))
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

        isAvatarDefault={this.state.isAvatarDefault}
        updateAvatar={this.updateAvatar}
      />
    );
  }
}


export default App;
