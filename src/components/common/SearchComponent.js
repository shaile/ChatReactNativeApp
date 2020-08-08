import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';


const SearchComponent = ({term, onTermChange}) => {
    return (
        <SearchBar
            lightTheme
            placeholder="Find users..."
            value={term}
            onChangeText={onTermChange}
      />
    );
}

export default SearchComponent;
