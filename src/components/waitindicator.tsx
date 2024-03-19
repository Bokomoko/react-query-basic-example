// LoadingIndicator.js
import React from 'react';
import loadingImage from '/src/assets/loading.svg';

const WaitIndicator = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div width={100} height={50}>
        <img src={loadingImage} alt='Loading...' />
      </div>
    );
  }
  return null;
};
export default WaitIndicator;
