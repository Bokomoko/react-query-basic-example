// LoadingIndicator.js
import React from 'react';
const WaitIndicator = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <img src='@assets/loading.svg' />
      </div>
    );
  }
  return null;
};
export default WaitIndicator;
