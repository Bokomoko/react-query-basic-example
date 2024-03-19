// LoadingIndicator.js
import React from 'react';
import loadingImage from '/src/assets/loading.svg';

const WaitIndicator = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div style={{ width: '40px' }}>
        <img
          src={loadingImage}
          alt='Loading...'
          style={{
            marginLeft: '10px',
            marginTop: '4px',
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    );
  }
  return null;
};
export default WaitIndicator;
