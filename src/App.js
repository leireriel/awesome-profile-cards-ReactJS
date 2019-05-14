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
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePalettes = this.handlePalettes.bind(this);
    this.handleReset = this.handleReset.bind(this);
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

  render() {
    return (
      <Card
        action={this.handleInputChange}
        userInfo={this.state.userInfo}
        actionPalettes={this.handlePalettes}
        state={this.state}
        reset={this.handleReset}
      />
    );
  }
}
export default App;
