import React from 'react';

function StatBar({ children, fillColor }) {
  return (
    <div
      className='StatBar'
      style={{ backgroundColor: fillColor, width: '100%', height: '20px' }}
    >
      {children}
    </div>
  );
}

export default StatBar;
