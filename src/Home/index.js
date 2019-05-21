import React from 'react';
import '../App.css';
import Logo from '../Components/Images/logo_GameOfCodes.svg';
import LogoAdalab from '../Components/Images/logo-adalab-80px.png';
import LogoHome from './Components/LogoHome';
import TitleHome from './Components/TitleHome';
import IconsHome from './Components/IconsHome';
import ButtonHome from './Components/ButtonHome';

class Home extends React.Component {
  render() {
    const landing = (
      <div className="home__container">
        <div className="home__container2">
          <header className="home__header">
            <div className="home__wrapper home__header-wrapper">
              <LogoHome src={Logo} alt="Awesome profile cards logo" />
            </div>
          </header>
          <main className="home">
            <div className="home__wrapper home__main-wrapper">
              <TitleHome
                title="Crea tu tarjeta de visita"
                subtitle="Crea mejores contactos profesionales de forma fácil y cómoda"
              />
              <IconsHome design="Diseña" fill="Rellena" share="Comparte" />
              <ButtonHome button="Comenzar" />
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
