import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonHome extends React.Component {
  render() {
    const { button } = this.props;
    return (
      <Link to="/card" className="home__button">
        <span className=" home__button-text">{button}</span>
      </Link>
    );
  }
}

ButtonHome.propTypes={
  button: PropTypes.string,
}
export default ButtonHome;
