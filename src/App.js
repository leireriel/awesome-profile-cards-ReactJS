import React from 'react';
import './App.css';
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
  }

  handleInputChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUser = {...prevState.userInfo};
      newUser[id] = value;
      return {userInfo: newUser}
    });

    // const newUser = {...}
    // console.log(id);
    // this.setState({

    // });
  }

  render() {
    return <Card
      action={this.handleInputChange}
      userInfo={this.state.userInfo}
      />;
  }
}
export default App;

