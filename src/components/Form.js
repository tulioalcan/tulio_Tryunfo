import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="Form">
        <h1>Carta</h1>
        <form>
          Name
          <label htmlFor="cardName">
            <input
              type="text"
              name="cardName"
              id="cardName"
              data-testid="name-input"
              placeholder="Card Name"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="cardDescription">
            Description
            <input
              id="cardDescription"
              type="textarea"
              data-testid="description-input"
              name="cardDescription"
              placeholder="Card Description"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr1
            <input
              id="cardAttr1"
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              placeholder="Card Attr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr2
            <input
              id="cardAttr2"
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              placeholder="Card Attr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr3
            <input
              id="cardAttr3"
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              placeholder="Card Attr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="cardImage">
            Image
            <input
              id="cardImage"
              type="text"
              data-testid="image-input"
              name="cardImage"
              placeholder="Card Image"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
          <label htmlFor="cardRare">
            Rare
            <select
              id="cardRare"
              type=""
              data-testid="rare-input"
              name="cardRare"
              placeholder="Card Rare"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Trunfo
            <input
              id="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              placeholder="Card Trunfo"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label>
          <button
            type="button"
            id="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
