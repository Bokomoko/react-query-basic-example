// LoadingIndicator.js
import React from 'react';
import './waitindicator.css'; // Assuming you have a CSS file for animations

const WaitIndicator = ({ isLoading }) => {
  if (isLoading) {
    return <div className='figure-spin'></div>;
  }
  return null;
};
export default WaitIndicator;
