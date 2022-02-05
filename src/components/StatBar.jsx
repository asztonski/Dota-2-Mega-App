import React from 'react';

function StatBar({ children, fillColor, percentFilled }) {
  return (
    <div
      className='StatBar'
      style={{
        backgroundColor: fillColor,
        width: `${percentFilled}%`,
        height: '10px',
        marginTop: '10px',
      }}
    >
      {children}
    </div>
  );
}

export default StatBar;
