import React from 'react';

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

export default LogoHome;
