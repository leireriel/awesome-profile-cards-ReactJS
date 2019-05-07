import React from 'react';
import './App.css';
import Logo from './logo_GameOfCodes.svg';
import LogoAdalab from './logo-adalab-80px.png';

class Home extends React.Component {
  render() {
    const landing = (
      <div className="home__container">
        <div className="home__container2">
          <header className="home__header">
            <div className="home__wrapper home__header-wrapper">
              <img
                className="home__header-image"
                src={Logo}
                alt="Awesome profile cards logo"
              />
            </div>
          </header>
          <main className="home">
            <div className="home__wrapper home__main-wrapper">
              <h1 className="home__title">Crea tu tarjeta de visita</h1>
              <h2 className="home__subtitle">
                Crea mejores contactos profesionales de forma fácil y cómoda
              </h2>
              <ul className="home__list">
                <li className="home__list-item">
                  <i className="home__list-image far fa-object-ungroup" />
                  <p className="home__list-text">Diseña</p>
                </li>
                <li className="home__list-item">
                  <i className="home__list-image far fa-keyboard" />
                  <p className="home__list-text">Rellena</p>
                </li>
                <li className="home__list-item">
                  <i className="home__list-image fas fa-share-alt" />
                  <p className="home__list-text">Comparte</p>
                </li>
              </ul>
              <a className="home__button" href="card.html">
                <span className="home__button-text">Comenzar</span>
              </a>
            </div>
          </main>
        </div>
        <footer className="main__footer">
          <div className="home__wrapper main__footer-wrapper">
            <p className="main__footer-copy">
              Awesome profile-cards &copy;2019
            </p>
            <a
              className="main__footer-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://adalab.es/"
            >
              <img
                className="main__footer-image"
                src={LogoAdalab}
                alt="Ir al sitio web de Adalab"
              />
            </a>
          </div>
        </footer>
      </div>
    );
    return landing;
  }
}

export default Home;
