import React from 'react';
import Logo from './logo_GameOfCodes.svg';
import LogoAdalab from './logo-adalab-80px.png';
// import { ReactComponent } from '*.svg';
import UserProfile from './Components/UserProfile';

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
                <legend className="hide">Sección de diseña</legend>
                <div className="design__container__title js-container-title">
                  <div className="design__container__title1">
                    <i className="design__icon far fa-object-ungroup" />
                    <h2 className="design__title">DISEÑA</h2>
                  </div>
                  <div className="design__container__title2 container-arrow">
                    <i className="fas fa-chevron-up design__img-arrow" />
                  </div>
                </div>
                <div className="design__container__form js-container-panel">
                  <h3 className="design__subtitle">COLORES</h3>
                  <div>
                    <div className="design__form design__form-blue">
                      <label className="hide" for="blue_palette">
                        blue palette
                      </label>
                      <input
                        id="blue_palette"
                        type="radio"
                        value="1"
                        name="palette"
                        className="radio_btn"
                      />
                      <ul className="theme">
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#114e4e' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#438792' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#a2deaf' }}
                        />
                      </ul>
                    </div>
                    <div className="design__form design__form-red">
                      <label className="hide" for="red_palette">
                        Red palette
                      </label>
                      <input
                        id="red_palette"
                        type="radio"
                        value="2"
                        name="palette"
                        className="radio_btn"
                      />
                      <ul className="theme">
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#420101' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#bd1010' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#e95626' }}
                        />
                      </ul>
                    </div>
                    <div className="design__form design__form-grey">
                      <label className="hide" for="grey_palette">
                        grey palette
                      </label>
                      <input
                        id="grey_palette"
                        type="radio"
                        value="3"
                        name="palette"
                        className="radio_btn"
                      />
                      <ul className="theme">
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#3e5b65' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#dfe5eb' }}
                        />
                        <li
                          className="theme__color"
                          style={{ backgroundColor: '#a0c0cf' }}
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="section__fill js-container js-container-hidden">
                <legend className="hide">Sección de rellena</legend>
                <div className="fill__container-title js-container-title">
                  <div className="fill__container_img-keyboard">
                    <i className="far fa-keyboard fill__img-keyboard" />
                  </div>
                  <h2 className="fill__title">Rellena</h2>
                  <div className="fill__container_img-arrow container-arrow">
                    <i className="fas fa-chevron-up fill__img-arrow" />
                  </div>
                </div>
                <div className="fill__form js-container-panel">
                  <div className="form__container-name">
                    <label className="form_title" for="name">
                      Nombre completo *
                    </label>
                    <input
                      className="form_field"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ej: Sally Jill"
                      required
                    />
                  </div>
                  <div className="form__container-job">
                    <label className="form_title" for="job">
                      Puesto *
                    </label>
                    <input
                      className="form_field"
                      type="text"
                      name="job"
                      id="job"
                      placeholder="Ej: Front-end unicorn"
                      required
                    />
                  </div>
                  <div className="form__container-photo">
                    <label className="form_title-photo" for="photo">
                      Imagen de perfil *
                    </label>
                    <input
                      className="form_field-photo js__profile-upload-btn"
                      type="file"
                      name="photo"
                      id="photo"
                      required
                    />
                    <div className="form__container-btn">
                      <button
                        type="button"
                        className="form__btn js__profile-trigger"
                      >
                        Añadir imagen
                      </button>
                      <div className="form__photo-preview js__profile-preview" />
                    </div>
                  </div>
                  <div className="form__container-email">
                    <label className="form_title" for="email">
                      Email *
                    </label>
                    <input
                      className="form_field"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Ej: sally-hill@gmail.com"
                      required
                    />
                  </div>
                  <div className="form__container-phone">
                    <label className="form_title" for="phone">
                      Teléfono
                    </label>
                    <input
                      className="form_field"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Ej: 555-55-55-55"
                    />
                  </div>
                  <div className="form__container-linkedin">
                    <label className="form_title" for="linkedin">
                      Linkedin *
                    </label>
                    <input
                      className="form_field"
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      placeholder="Ej: linkedin.com/in/sally.hill"
                      required
                    />
                  </div>
                  <div className="form__container-github">
                    <label className="form_title" for="github">
                      Github *
                    </label>
                    <input
                      className="form_field"
                      type="text"
                      name="github"
                      id="github"
                      placeholder="Ej: sally-hill"
                      required
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="share__section">
                <legend className="hide">Sección de compartir</legend>
                <div className="share__section js-container js-container-hidden">
                  <div className="share__card js-container-title">
                    <p className="share__title">
                      <i className="share__icon fas fa-share-alt" />
                      comparte
                    </p>
                    <div className="arrow-wrapper container-arrow">
                      <i className="fas fa-chevron-up" />
                    </div>
                  </div>
                  <div className="share__btn--wrapper js-container-panel">
                    <button type="submit" className="share__btn--create">
                      <i className="far fa-address-card" />
                      Crear tarjeta
                    </button>
                  </div>
                </div>
                <div className="share__info--wrapper hidden">
                  <p className="share__paragraph">La tarjeta ha sido creada:</p>
                  <a className="share__link--cards link" href="" />
                  <a href="" className="share__btn--twitter link">
                    <i className="fab fa-twitter" />
                    Compartir en twitter
                  </a>
                </div>
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
