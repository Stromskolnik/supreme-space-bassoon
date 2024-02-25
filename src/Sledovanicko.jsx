import React, { useState } from 'react';
import Graf from './Graf';
import { Link } from 'react-router-dom';

const Sledovanicko = ({ updateTotals, totals }) => {
  const [transactionType, setTransactionType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (transactionType === "income") {
      updateTotals((prevTotals) => ({
        income: prevTotals.income + parseFloat(amount),
        expense: prevTotals.expense
      }));
    } else if (transactionType === "expense") {
      updateTotals((prevTotals) => ({
        income: prevTotals.income,
        expense: prevTotals.expense - parseFloat(amount)
      }));
    }

    setTransactionType('income');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Přidejte Transakci</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Typ:
            <select value={transactionType} onChange={handleTypeChange}>
              <option value="income">Příjem</option>
              <option value="expense">Výdaj</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Počet:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Kategorie:
            <input type="text" value={category} onChange={handleCategoryChange} />
          </label>
        </div>
        <div>
          <button type="submit">Přidat</button>
        </div>
      </form>
      <Graf income={totals.income} expense={totals.expense} />
      <div>
      </div>
    </div>
  );
};

export default Sledovanicko;
