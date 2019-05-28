import React from 'react';
class Share extends React.Component {
  render() {
    const { state, collapse, actionShare } = this.props;
    return (
      <React.Fragment>
        <legend className="hide">Sección de compartir</legend>
        <div
          className="share__section js-container js-container-hidden"
          id="share"
          onClick={collapse}
          data-id="share"
        >
          <div className="share__card js-container-title">
            <p className="share__title">
              <i className="share__icon fas fa-share-alt" /> comparte
            </p>
            <div className="arrow-wrapper container-arrow">
              <i className=
                {`${state.isVisible === 'share' ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}
              />
            </div>
          </div>
          <div
            className={`share__btn--wrapper ${
              state.isVisible === 'share' ? '' : 'js-container-panel'
              }`}
          >
            <button type="submit" className="share__btn--create" onClick={actionShare}>
              <i className="far fa-address-card" />
              Crear tarjeta
            </button>
          </div>
        </div>
        {state.urlAPI === '' && state.shareButton === 'clicked' ?
          <p>Cargando...</p>
          :
          null
        }
        {state.urlError !== '' ?
          <div>
            <p className="error__message">
              Ups!<span>
                <img src="" alt="" />💀
                </span> Rellena los campos obligatorios <span>
                <img src="" alt="" />💀
                </span>
            </p>
          </div>
          :
          <div className={`share__info--wrapper ${state.urlAPI === '' ? 'hidden' : ''}`}>
            <React.Fragment>
              <p className="share__paragraph">La tarjeta ha sido creada:</p>
              <a className="share__link--cards link" href={`${state.urlAPI}`}>{state.urlAPI}</a>
              <a className="share__btn--twitter link" href="#Crear">
                <i className="fab fa-twitter" />
                Compartir en twitter
              </a>
            </React.Fragment>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Share;
