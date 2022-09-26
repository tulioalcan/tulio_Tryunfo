import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <h1>Carta</h1>
        <form>
          Name
          <label htmlFor="cardName">
            <input
              id="cardName"
              type="text"
              data-testid="name-input"
              name="name"
              placeholder="Card Name"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardDescription">
            Description
            <input
              id="cardDescription"
              type="textarea"
              data-testid="description-input"
              name="description"
              placeholder="Card Description"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr1
            <input
              id="cardAttr1"
              type="number"
              data-testid="attr1-input"
              name="attr1"
              placeholder="Card Attr1"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr2
            <input
              id="cardAttr2"
              type="number"
              data-testid="attr2-input"
              name="attr2"
              placeholder="Card Attr2"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr3
            <input
              id="cardAttr3"
              type="number"
              data-testid="attr3-input"
              name="attr3"
              placeholder="Card Attr3"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardImage">
            Image
            <input
              id="cardImage"
              type="text"
              data-testid="image-input"
              name="image"
              placeholder="Card Image"
              onChange={ () => {} }
            />
          </label>
          <label htmlFor="cardRaro">
            Raro
            <select
              id="cardRaro"
              type=""
              data-testid="rare-input"
              name="Raro"
              placeholder="Card Raro"
              onChange={ () => {} }
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
              name="Trunfo"
              placeholder="Card Trunfo"
              onChange={ () => {} }
            />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
