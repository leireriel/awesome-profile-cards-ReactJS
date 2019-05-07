import React from 'react';

class LogoHome extends React.Component {
  render() {
    const { className, src, alt } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default LogoHome;
