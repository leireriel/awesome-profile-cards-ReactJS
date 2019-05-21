import React from 'react';
import { Link } from 'react-router-dom';

class ButtonHome extends React.Component {
  render() {
    const { button } = this.props;
    return (
      <Link to="/card">
        <span className="home__button home__button-text">{button}</span>
      </Link>
    );
  }
}

export default ButtonHome;
