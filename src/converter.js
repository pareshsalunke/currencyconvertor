import React from 'react';


function Convertor() {

    return (
        <div className="container">
          <input type="text" name="baseCurrency" value={baseCurrency} onChange={this.handleInputChange} />
          <input type="text" name="convertedCurrency" value={convertedCurrency} onChange={this.handleInputChange} />
          <select value={currencySymbol} onChange={this.handleSelectChange}>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="IND">IND</option>
          </select>
        </div>
    )
}