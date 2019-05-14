import React from 'react';

class Fill extends React.Component {
  render() {
    const { action, userInfo } = this.props;
    return (
      <React.Fragment>
        <legend className="hide">Sección de rellena</legend>
        <div className="fill__container-title js-container-title">
          <div className="fill__container_img-keyboard">
            <i className="far fa-keyboard fill__img-keyboard" />
          </div>
          <h2 className="fill__title">Rellena</h2>
          <div className="fill__container_img-arrcontainer-arrow">
            <i className="fas fa-chevron-up fill__img-arrow" />
          </div>
        </div>
        <div className="fill__form js-container-panel">
          <div className="form__container-name">
            <label className="form_title" htmlFor="name">
              Nombre completo *
            </label>
            <input
              className="form_field"
              type="text"
              name="name"
              value={userInfo.name}
              id="name"
              placeholder="Ej: Sally Jill"
              onChange={action}
              required
            />
          </div>
          <div className="form__container-job">
            <label className="form_title" htmlFor="job">
              Puesto *
            </label>
            <input
              className="form_field"
              type="text"
              name="job"
              value={userInfo.job}
              id="job"
              placeholder="Ej: Front-end unicorn"
              onChange={action}
              required
            />
          </div>
          <div className="form__container-photo">
            <label className="form_title-photo" htmlFor="photo">
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
              <button type="button" className="form__btn js__profile-trigger">
                Añadir imagen
              </button>
              <div className="form__photo-preview js__profile-preview" />
            </div>
          </div>
          <div className="form__container-email">
            <label className="form_title" htmlFor="email">
              Email *
            </label>
            <input
              className="form_field"
              type="email"
              name="email"
              value={userInfo.email}
              id="email"
              placeholder="Ej: sally-hill@gmail.com"
              onChange={action}
              required
            />
          </div>
          <div className="form__container-phone">
            <label className="form_title" htmlFor="phone">
              Teléfono
            </label>
            <input
              className="form_field"
              type="tel"
              name="phone"
              value={userInfo.phone}
              id="phone"
              placeholder="Ej: 555-55-55-55"
              onChange={action}
            />
          </div>
          <div className="form__container-linkedin">
            <label className="form_title" htmlFor="linkedin">
              Linkedin *
            </label>
            <input
              className="form_field"
              type="text"
              name="linkedin"
              value={userInfo.linkedin}
              id="linkedin"
              placeholder="Ej: linkedin.com/in/sally.hill"
              onChange={action}
              required
            />
          </div>
          <div className="form__container-github">
            <label className="form_title" htmlFor="github">
              Github *
            </label>
            <input
              className="form_field"
              type="text"
              name="github"
              value={userInfo.github}
              id="github"
              placeholder="Ej: sally-hill"
              onChange={action}
              required
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Fill;
