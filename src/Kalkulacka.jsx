import React, { useState } from 'react';

const Kalkulacka = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const handleInitialAmountChange = (event) => {
    setInitialAmount(event.target.value);
  };

  const handleMonthlyDepositChange = (event) => {
    setMonthlyDeposit(event.target.value);
  };

  const handleAnnualInterestRateChange = (event) => {
    setAnnualInterestRate(event.target.value);
  };

  const handleYearsChange = (event) => {
    setYears(event.target.value);
  };

  const calculateFutureValue = () => {
    const principal = parseFloat(initialAmount);
    const deposit = parseFloat(monthlyDeposit);
    const interestRate = parseFloat(annualInterestRate) / 100;
    const period = parseInt(years);

    if (!isNaN(principal) && !isNaN(deposit) && !isNaN(interestRate) && !isNaN(period)) {
      let futureVal = principal;

      for (let i = 0; i < period; i++) {
        futureVal = futureVal * (1 + interestRate) + deposit * ((1 + interestRate) - 1) / interestRate;
      }

      setFutureValue(futureVal.toFixed(2));
    } else {
      setFutureValue(null);
    }
  };

  return (
    <div>
      <h2>Kalkulačka spoření/investic</h2>
      <form>
        <div>
          <label>
            Počáteční částka:
            <input type="number" value={initialAmount} onChange={handleInitialAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Měsíční vklad:
            <input type="number" value={monthlyDeposit} onChange={handleMonthlyDepositChange} />
          </label>
        </div>
        <div>
          <label>
            Roční úroková sazba (%):
            <input type="number" value={annualInterestRate} onChange={handleAnnualInterestRateChange} />
          </label>
        </div>
        <div>
          <label>
            Doba trvání (v letech):
            <input type="number" value={years} onChange={handleYearsChange} />
          </label>
        </div>
        <div>
          <button type="button" onClick={calculateFutureValue}>
            Spočítat
          </button>
        </div>
      </form>
      <div>
        {futureValue !== null && (
          <h3>Odhadovaná budoucí hodnota: {futureValue}</h3>
        )}
      </div>
    </div>
  );
};

export default Kalkulacka;
