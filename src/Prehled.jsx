import React from 'react';

const Prehled = ({ prijmy, vydaje }) => {
  return (
    <div>
      <h2>Domovská stránka</h2>
      <p>Aktuální finanční stav uživatele:</p>
      <p>příjmy: {prijmy}</p>
      <p>výdaje: {vydaje}</p>
    </div>
  );
};

export default Prehled;
