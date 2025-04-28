import React from 'react';

function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={() => onFilterChange('all')}
        style={{ fontWeight: currentFilter === 'all' ? 'bold' : 'normal', marginRight: '10px' }}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        style={{ fontWeight: currentFilter === 'completed' ? 'bold' : 'normal', marginRight: '10px' }}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange('incomplete')}
        style={{ fontWeight: currentFilter === 'incomplete' ? 'bold' : 'normal' }}
      >
        Incomplete
      </button>
    </div>
  );
}

export default FilterButtons;
