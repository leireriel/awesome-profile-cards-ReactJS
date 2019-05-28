import React from 'react';
// import userProfile from './userProfile';
// const { name, job } = this.state;

class PreviewCard extends React.Component {

  // componentWillUnmount() {
  //   this.handleReset();
  // }

  render() {
    const {
      name,
      job,
      email,
      phone,
      linkedin,
      github,
      palette,
      photo
    } = this.props.userInfo;
    const { reset } = this.props;
    return (
      <section className="preview">
        <div
          className={`preview__card preview-${
            palette === 1 ? 'default' : palette === 2 ? 'red' : 'grey'
          }`}
        >
          <div className="preview__card--top">
            <button type="reset" className="preview__reset" onClick={reset}>
              <p className="preview__trash">
                <i className="far fa-trash-alt" /> reset
              </p>
            </button>
            <div className="preview__card--text">
              <h2 className="preview--h2">
                {name === '' ? 'Nombre Apellidos' : name}
              </h2>
              <h3 className="preview--h3">
                {job === '' ? 'Front-end developer' : job}
              </h3>
            </div>
          </div>
          <div className="preview__card--image js__profile-image"
          style={{ backgroundImage: `url(${photo})` }}/>
          <img className="image-access" src="" alt="tu foto" />
          <div className="preview__card--bottom">
            <ul className="preview__card--sm">
              <li className={`sm mail ${email === '' ? 'hidden' : ''}`}>
                <a className="sm-link sm-link-mail" href={'mailto:' + email}>
                  <i className="far fa-envelope" />
                  <span className="access">contactar por email</span>
                </a>
              </li>
              <li className={`sm telephone ${phone === '' ? 'hidden' : ''}`}>
                <a className="sm-link sm-link-telephone" href={phone}>
                  <i className="fas fa-mobile-alt" />
                  <span className="access">contactar por teléfono</span>
                </a>
              </li>
              <li className={`sm linkedin ${linkedin === '' ? 'hidden' : ''}`}>
                <a
                  className="sm-link sm-link-linkedin"
                  href={'https://www.linkedin.com/in/' + linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                  <span className="access">contactar por linkedin</span>
                </a>
              </li>
              <li className={`sm github ${github === '' ? 'hidden' : ''}`}>
                <a
                  className="sm-link sm-link-github"
                  href={'https://github.com/' + github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-alt" />
                  <span className="access">contactar por github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
// Faltan proptypes del componente profile de subir la foto de carlos
export default PreviewCard;
