import React from 'react';
import './App.css';
import { conversion } from './data';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      baseCurrency: "",
      convertedCurrency: "",
      currencySymbol: "EUR"
    };
  }

  

  handleInputChange = (e) => {
    const {name, value} = e.target;
    
    this.setState({
      [name]: value
    }, this.convertCurrencyFromUSD);
    
    // doing the math for conversion 
    
    // setting the state for converted currency 
  }

  handleSelectChange = (e) => {
    this.setState({
      currencySymbol: e.target.value
    }, this.convertCurrencyFromUSD);
  }

  convertCurrencyFromUSD = () => {
    let convertedValue = 0.0;
  
    convertedValue = conversion['USD'][this.state.currencySymbol] * this.state.baseCurrency;
    this.setState({
      convertedCurrency: convertedValue
    });
  }

  render () {
    const {baseCurrency, convertedCurrency, currencySymbol} = this.state;
    return (
      <div className="app">
        <header>Currency Convertor</header>
        <div className="conv--container">
          <input
            className="curr--input"
            placeholder="Enter the currency"
            type="text" name="baseCurrency" 
            value={baseCurrency} onChange={this.handleInputChange} 
          />
          <input
            className="curr--input"
            type="text" name="convertedCurrency"
            disabled
            value={convertedCurrency} onChange={this.handleInputChange} 
          />
          <select value={currencySymbol} onChange={this.handleSelectChange}>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="IND">IND</option>
          </select>
        </div>
      </div>
    );
  }
  
}

export default App;
