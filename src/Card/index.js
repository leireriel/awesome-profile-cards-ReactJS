import React from 'react';
import Logo from '../Components/Images/logo_GameOfCodes.svg';
import LogoAdalab from '../Components/Images/logo-adalab-80px.png';
// import { ReactComponent } from '*.svg';
import UserProfile from './Components/UserProfile';
import Design from './Components/Design';
import Fill from './Components/Fill';
import Share from './Components/Share';

class Card extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="card__header">
          <div className="wrapper card__header">
            <a href="index.html">
              <img
                className="card__header-image"
                src={Logo}
                alt="Ir a la home"
              />
            </a>
          </div>
        </header>
        <main className="main__card">
          <div className="wrapper main__card-wrapper">
            <form
              action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/"
              method="post"
              className="card__section1"
            >
              <fieldset className="design js-container">
                <Design />
              </fieldset>
              <fieldset className="section__fill js-container js-container-hidden">
                <Fill />
              </fieldset>
              <fieldset className="share__section">
                <Share />
              </fieldset>
            </form>
            <section className="preview">
              <div className="preview__card">
                <div className="preview__card--top">
                  <button type="reset" className="preview__reset">
                    <p className="preview__trash">
                      <i className="far fa-trash-alt" /> reset
                    </p>
                  </button>
                  <div className="preview__card--text">
                    <h2 className="preview--h2">nombre apellido</h2>
                    <h3 className="preview--h3">front-end developer</h3>
                  </div>
                </div>
                <UserProfile />
                <img className="image-access" src="" alt="tu foto" />
                <div className="preview__card--bottom">
                  <ul className="preview__card--sm">
                    <li className="sm mail hidden">
                      <a className="sm-link sm-link-mail" href="">
                        <i className="far fa-envelope" />
                        <span className="access">contactar por email</span>
                      </a>
                    </li>
                    <li className="sm telephone hidden">
                      <a className="sm-link sm-link-telephone" href="">
                        <i className="fas fa-mobile-alt" />
                        <span className="access">contactar por teléfono</span>
                      </a>
                    </li>
                    <li className="sm linkedin hidden">
                      <a className="sm-link sm-link-linkedin" href="">
                        <i className="fab fa-linkedin-in" />
                        <span className="access">contactar por linkedin</span>
                      </a>
                    </li>
                    <li className="sm github hidden">
                      <a className="sm-link sm-link-github" href="">
                        <i className="fab fa-github-alt" />
                        <span className="access">contactar por github</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="card__footer">
          <div className="wrapper card__footer-wrapper">
            <p className="card__footer-copy">
              Awesome profile-cards &copy;2019
            </p>
            <a
              className="card__footer-link"
              target="_blank"
              href="https://adalab.es/"
            >
              <img
                className="card__footer-image"
                src={LogoAdalab}
                alt="Ir al sitio web de Adalab"
              />
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Card;
