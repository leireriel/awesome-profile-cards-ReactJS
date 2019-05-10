import React from 'react';

class TitleHome extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    const all = (
      <div className="home__container__title">
        <h1 className="home__title">{title}</h1>
        <h2 className="home__subtitle">{subtitle}</h2>
      </div>
    );
    return all;
  }
}

export default TitleHome;