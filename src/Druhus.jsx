import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sledovanicko from './Sledovanicko';
import VypocetDPH from './VypocetDPH';
import Prevod from './Prevod';
import Kalkulacka from './Kalkulacka';
import Login from './Prihlaseni';
import './Druhus.css';

const Druhus = ({ updateTotals: propUpdateTotals }) => {
  const [totals, setTotals] = useState({ income: 0, expense: 0 });

  const localUpdateTotals = (newTotals) => {
    setTotals(newTotals);
  };

  return (
    <div className="container">
      <h1>Druhus Page</h1>
      <Sledovanicko updateTotals={localUpdateTotals} totals={totals} />
      <VypocetDPH></VypocetDPH>
      <Prevod></Prevod>
      <Kalkulacka></Kalkulacka>
      <Login></Login>
      <Link to="/">
        <button className="link-button">Domovská Stránka</button>
      </Link>
    </div>
  );
};

export default Druhus;
