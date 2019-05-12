import React from 'react';

class Linkedin extends React.Component {
  HandleInput(event) {
    const trigger = event.currentTarget.value;
    console.log(trigger);
  }

  render() {
    return (
      <div className="form__container-linkedin">
        <label
          className="form_title"
          for="linkedin">
          Linkedin *
        </label>
        <input
          className="form_field"
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          required
          onChange={this.HandleInput}
        />
      </div>
    );
  }
}

export default Linkedin;
