import React, { useState, useEffect, useRef } from 'react';
import './search-input';

const SearchInputWrapper = ({ element }) => {

  const SearchInputRef = useRef(null);

  useEffect(() => {
    const SearchInput = SearchInputRef.current;

    if (SearchInput && element) {
      SearchInput.e = element;

    }
  }, [element]);

  return (
    <div>
      {element ? (
        <search-input id="search-input" ref={SearchInputRef}></search-input>
      ) : (
        <p>Loading data...</p>
      )}

     
    </div>
  );
};

export default SearchInputWrapper;
