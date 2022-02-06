import React from 'react';
import PropTypes from 'prop-types';

function StatBar({
  children,
  fillColor = 'yellow',
  percentFilled = 50,
  onBarClicked,
}) {
  // Clamp the percentFilled between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentFilled));

  return (
    <div
      className='StatBar'
      style={{
        backgroundColor: fillColor,
        width: `${clampedPercentage}%`,
        height: '10px',
        marginTop: '10px',
      }}
      onClick={onBarClicked}
    >
      {children}
    </div>
  );
}

StatBar.propTypes = {
  /** Color to fill the bar with, ex: 'yellow', '#ccc', 'rgba(0, 20, 54, 0.5)'*/
  fillColor: PropTypes.string,

  /** What percentage (0-100) is the bar to be filled? */
  percentFilled: PropTypes.number,

  /** Callback function for when the bar's onClicked event is triggered */
  onBarClicked: PropTypes.func,
};

StatBar.defaultProps = {
  fillColor: 'blue',
  percentFilled: 50,
  onBarClicked: undefined,
};

export default StatBar;
