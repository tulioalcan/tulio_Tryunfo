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
        <h1>Form</h1>
        <form>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              data-testid="name-input"
              placeholder="Card Name"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              id="description"
              type="textarea"
              data-testid="description-input"
              name="description"
              placeholder="Card Description"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
          <label htmlFor="attr1">
            Attr1
            <input
              id="attr1"
              type="number"
              data-testid="attr1-input"
              name="attr1"
              placeholder="Card Attr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="attr2">
            Attr2
            <input
              id="attr2"
              type="number"
              data-testid="attr2-input"
              name="attr2"
              placeholder="Card Attr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="attr3">
            Attr3
            <input
              id="attr3"
              type="number"
              data-testid="attr3-input"
              name="attr3"
              placeholder="Card Attr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="image">
            Image
            <input
              id="image"
              type="text"
              data-testid="image-input"
              name="image"
              placeholder="Card Image"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
          <label htmlFor="Rare">
            Rare
            <select
              id="Rare"
              type=""
              data-testid="rare-input"
              name="Rare"
              placeholder="Card Rare"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="Trunfo">
            Trunfo
            <input
              id="Trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              name="Trunfo"
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
