import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import logo from './logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardList: [],
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { state } = this;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = state;
    const maxCard = 90;
    const max = 210;

    if (cardName.trim().length === 0
    || cardDescription.trim().length === 0
    || cardImage.trim().length === 0
    || cardRare.trim().length === 0) {
      return true;
    }

    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > max) {
      return true;
    }
    if (cardAttr1 > maxCard || cardAttr2 > maxCard || cardAttr3 > maxCard) {
      return true;
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      return true;
    }
  };

  handleClickCardList = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName: [cardName],
      cardDescription: [cardDescription],
      cardImage: [cardImage],
      cardRare: [cardRare],
      cardAttr1: [cardAttr1],
      cardAttr2: [cardAttr2],
      cardAttr3: [cardAttr3],
      cardTrunfo: [cardTrunfo],
    };

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
    }));
  };

  hasTrunfo = () => {
    const { cardList } = this.state;
    return cardList.some((card) => card.cardTrunfo);
  };

  render() {
    const isDisable = this.validateForm();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    return (
      <>
        <img src={ logo } className="logo" alt="logo-tryunfo" />
        <div className="box">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isDisable }
            onSaveButtonClick={ this.handleClickCardList }
            onInputChange={ this.onInputChange }
            hasTrunfo={ this.hasTrunfo() }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          {cardList.map((newCard) => (
            <Card
              key={ newCard.cardName }
              cardName={ newCard.cardName }
              cardDescription={ newCard.cardDescription }
              cardAttr1={ newCard.cardAttr1 }
              cardAttr2={ newCard.cardAttr2 }
              cardAttr3={ newCard.cardAttr3 }
              cardImage={ newCard.cardImage }
              cardRare={ newCard.cardRare }
              cardTrunfo={ newCard.cardTrunfo }
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
