import React from 'react';

class Design extends React.Component {
  render() {
    const { actionPalettes, state } = this.props;
    return (
      <React.Fragment>
        <legend className="hide">Sección de diseña</legend>
        <div className="design__container__tijs-container-title">
          <div className="design__container__title1">
            <i className="design__icon far fa-object-ungroup" />
            <h2 className="design__title">DISEÑA</h2>
            <div className="design__container__titcontainer-arrow">
              <i className="fas fa-chevron-up design__img-arrow" />
            </div>
          </div>
        </div>
        <div className="design__container__form js-container-panel">
          <h3 className="design__subtitle">COLORES</h3>
          <ul className="desing__colors-list">
            <li className="design__form design__form-blue">
              {/* esta clase revisar */}
              <label className="hide" htmlFor="blue_palette">
                blue palette
              </label>
              <input
                id="blue_palette"
                type="radio"
                value="1"
                name="palette"
                className="radio_btn"
                onChange={actionPalettes}
                checked={state.userInfo.palette === 1}
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
            </li>
            <li className="design__form design__form-red">
              {/* revis */}
              <label className="hide" htmlFor="red_palette">
                Red palette
              </label>
              <input
                id="red_palette"
                type="radio"
                value="2"
                name="palette"
                className="radio_btn"
                onChange={actionPalettes}
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
            </li>
            <li className="design__form design__form-grey">
              {/* revisar */}
              <label className="hide" htmlFor="grey_palette">
                grey palette
              </label>
              <input
                id="grey_palette"
                type="radio"
                value="3"
                name="palette"
                className="radio_btn"
                onChange={actionPalettes}
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
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Design;
