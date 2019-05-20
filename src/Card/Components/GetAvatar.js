import React, { Component } from "react";
// import PropTypes from 'prop-types';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return (!isDefault) ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isAvatarDefault, avatar } = this.props;
    return (

      <div className="form__container-photo">
        <label className="form_title-photo" htmlFor="photo">
          Imagen de perfil *
      </label>
        <input
          className="form_field-photo js__profile-upload-btn"
          type="file"
          name="photo"
          id="photo"
          ref={this.myFileField}
          onChange={this.uploadImage}
          required
        />
        <div className="form__container-btn">
          <button
          type="button"
          className="form__btn js__profile-trigger"
          onClick={this.handleFilePicker}
          >
            Añadir imagen
        </button>
          <div
          className="form__photo-preview js__profile-preview"
          style={this.getPreview(isAvatarDefault, avatar)}
          />
        </div>
      </div>
    );
  }
}

// GetAvatar.propTypes = {
//   isAvatarDefault: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   updateAvatar: PropTypes.func.isRequired
// };

export default GetAvatar;
