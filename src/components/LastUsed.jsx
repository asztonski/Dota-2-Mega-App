import React from 'react';
import ReactTimeAgo from 'react-time-ago';

function LastUsed({ label, date }) {
  return (
    <div>
      {label} <ReactTimeAgo date={date} locale='en-US' />
    </div>
  );
}

export default LastUsed;
