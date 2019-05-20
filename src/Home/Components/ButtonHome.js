import React from 'react';
import { Link } from 'react-router-dom';

class ButtonHome extends React.Component {
  render() {
    const { button } = this.props;
    return (
      <a className="home__button" href="card.html">
        <Link to="/card">
          <span className="home__button-text">{button}</span>
        </Link>
      </a>
    );
  }
}

export default ButtonHome;
