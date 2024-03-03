import React, { useState } from 'react';

const VypocetDPH = () => {
  const [priceWithoutVAT, setPriceWithoutVAT] = useState('');
  const [vatRate, setVatRate] = useState(21);
  const [totalPriceWithVAT, setTotalPriceWithVAT] = useState(0);

  const handlePriceChange = (event) => {
    setPriceWithoutVAT(event.target.value);
  };

  const handleVatRateChange = (event) => {
    setVatRate(Number(event.target.value));
  };

  const calculateTotalPrice = () => {
    const price = parseFloat(priceWithoutVAT);
    if (!isNaN(price)) {
      const vatAmount = (price * vatRate) / 100;
      const totalPrice = price + vatAmount;
      setTotalPriceWithVAT(totalPrice.toFixed(2));
    } else {
      setTotalPriceWithVAT(0);
    }
  };

  return (
    <div>
      <h2>Výpočet DPH</h2>
      <form>
        <div>
          <label>
            Cena bez DPH:
            <input type="number" value={priceWithoutVAT} onChange={handlePriceChange} />
          </label>
        </div>
        <div>
          <label>
            Sazba DPH (%):
            <select value={vatRate} onChange={handleVatRateChange}>
              <option value={21}>21%</option>
              <option value={15}>12%</option>
            </select>
          </label>
        </div>
        <div>
          <button type="button" onClick={calculateTotalPrice}>
            Spočítat
          </button>
        </div>
      </form>
      <div>
        <h3>Celková cena s DPH: {totalPriceWithVAT} Kč</h3>
        <h3>Rozdíl: {totalPriceWithVAT - priceWithoutVAT} Kč</h3>
      </div>
    </div>
  );
};

export default VypocetDPH;
