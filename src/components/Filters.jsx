import React, { useState } from 'react';

const Filters = ({ searchQuery, setSearchQuery, onMoreFiltersClick }) => {
  const [activeFilter, setActiveFilter] = useState('');

  const handleButtonClick = (label) => {
    setActiveFilter(label);
    if (label === 'More Filters') {
      onMoreFiltersClick();
    }
  };

  const filterButtons = [
    'Pre Sarfaesi',
    'NPA',
    '13(3) Responses',
    'Symbolic Possession',
    'DM Order',
    'Physical Possessions',
    'Auctions',
    'More Filters'
  ];

  return (
    <div className="filters-wrapper">
      <div className="filters-buttons-row">
        {filterButtons.map((label) => (
          <button
            key={label}
            onClick={() => handleButtonClick(label)}
            className={activeFilter === label ? 'active-filter' : ''}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="search-bar-wrapper">
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search for a loan number"
    className="search-bar"
  />
  {searchQuery && (
    <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
      ×
    </button>
  )}
</div>

    </div>
  );
};

export default Filters;
