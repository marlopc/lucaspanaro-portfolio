import React from 'react';

const PortfolioLogo = ({ className = '' }) => {
  return (
    <div className={`logo ${className}`}>
      <p>LP<span>.</span></p>
    </div>
  )
};

export default PortfolioLogo;
