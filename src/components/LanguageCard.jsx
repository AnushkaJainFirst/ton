import React from 'react';
import './LanguageCard.css';

function LanguageCard({ name, flag }) {
  return (
    <div className="language-card">
      <img src={flag} alt={`${name} flag`} className="language-flag" />
      <p>{name}</p>
    </div>
  );
}

export default LanguageCard;
