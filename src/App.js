import React from 'react';
import './App.css';
// import Home from './Home/index';
import Card from './Card/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nombre apellido',
      job: 'Front end',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
      palette: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    console.log(id);
    this.setState({
      [id]: value
    });
    console.log(value);
  }

  render() {
    return <Card
      action={this.handleInputChange}
      userInfo={this.state} />;
  }
}
export default App;

