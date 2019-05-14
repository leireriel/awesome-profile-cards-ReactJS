import React from 'react';
import './scss/main.scss';
// import Home from './Home/index';
import Card from './Card/index';

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
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
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
    const value = event.currentTarget.value;
    console.log(value);
    this.setState((prevState, props) => {
      const newPalettes = {...prevState.userinfo, palette:value};
      return { userInfo: newPalettes }
    });
  }
  render() {
    return (
      <Card action={this.handleInputChange} userInfo={this.state.userInfo} actionPalettes={this.handlePalettes}/>
    );
  }
}
export default App;
