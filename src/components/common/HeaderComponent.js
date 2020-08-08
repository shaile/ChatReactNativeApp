import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'
import { Header } from 'react-native-elements';


const HeaderComponent = () => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}

export default HeaderComponent;
