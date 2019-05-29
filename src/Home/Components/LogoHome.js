import React from 'react';
import PropTypes from 'prop-types';

class LogoHome extends React.Component {
  render() {
    const { src, alt } = this.props;
    return (
      <img className="home__header-image"
      src={src}
      alt={alt}
      />
    );
  }
}
LogoHome.propTypes={
  src: PropTypes.string,
  alt: PropTypes.string

}
export default LogoHome;
