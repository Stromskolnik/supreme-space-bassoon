import React, { useState } from 'react';

const Prevod = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('CZK');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const conversionRates = {
    CZK: { EUR: 0.04, USD: 0.05 },
    EUR: { CZK: 25.0, USD: 1.22 },
    USD: { CZK: 20.0, EUR: 0.82 },
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const inputAmount = parseFloat(amount);
    if (!isNaN(inputAmount)) {
      const rate = conversionRates[baseCurrency][targetCurrency];
      const converted = inputAmount * rate;
      setConvertedAmount(converted.toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <div>
      <h2>Převod Měn</h2>
      <form>
        <div>
          <label>
            Částka k převodu:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Základní měna:
            <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
              <option value="CZK">CZK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Cílová měna:
            <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
              <option value="CZK">CZK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <div>
          <button type="button" onClick={convertCurrency}>
            Převést
          </button>
        </div>
      </form>
      <div>
        <h3>Převedená částka: {convertedAmount} {targetCurrency}</h3>
      </div>
    </div>
  );
};

export default Prevod;