import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


const FooterComponent = () => {
    return (
        <View style={styles.footer}>
            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />
            <Icon
                reverse
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />

            <Icon
                reverse
                name='telegram'
                type='font-awesome'
                color='#517fa4'
                onPress={() => console.log('hello')} />

            <Icon
                reverse
                name='telegram'
                type='font-awesome'
                color='#517fa4'
                onPress={() => console.log('hello')} />
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        borderTopColor: "#517fa4",
        borderTopWidth: 1,
        alignItems: "center",
        flexDirection: "row"
    }
});

export default FooterComponent;
