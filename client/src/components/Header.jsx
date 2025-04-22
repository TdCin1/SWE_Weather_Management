import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '10px 20px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center' }}>
      <img src="/WeatherLogo.png" alt="Logo" style={{ height: '40px' }} />
    </header>
  );
};

export default Header;
