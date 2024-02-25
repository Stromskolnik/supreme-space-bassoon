import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Prehled from './Prehled';
import Jedem from './Sledovanicko';
import './App.css';

const Home = () => {
  const [totals, setTotals] = useState({ income: 0, expense: 0 });

  const updateTotals = (newTotals) => {
    setTotals(newTotals);
  };

  return (
    <div className='home'>
      <Prehled prijmy={totals.income} vydaje={totals.expense} />
      <h3 className="nic">Aktuální finanční stav uživatele: {totals.income - totals.expense}</h3>

      <Link to={{ pathname: "/druhus", state: { totals } }} className="link-button">
        Go to Druhus Page
      </Link>
    </div>
  );
};

export default Home;
