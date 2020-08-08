import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';


const UserScreen = ({term, onTermChange}) => {
    return (
        <SearchBar
            lightTheme
            placeholder="Find users..."
            value={term}
            onChangeText={onTermChange}
      />
    );
}

export default UserScreen;
