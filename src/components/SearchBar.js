import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search YouTube..."
          style={{ width: '100%', padding: '10px' }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
