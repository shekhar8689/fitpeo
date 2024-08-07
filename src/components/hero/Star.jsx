import React from 'react';

const Star = ({ selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: selected ? '#ffd700' : '#ccc',
        fontSize: '2rem',
      }}
    >
      ★
    </span>
  );
};

export default Star;
