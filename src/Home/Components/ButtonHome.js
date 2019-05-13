import React from 'react';

class ButtonHome extends React.Component {
  render() {
    const {button} = this.props;
    return (
      <a className="home__button" href="card.html">
        <span className="home__button-text">{button}</span>
      </a>
    );
  }
}

export default ButtonHome;
