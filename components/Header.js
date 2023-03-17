import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Header() {

    return (
        <View style={styles.main}>
            <Text style={styles.text}>я header</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:"orange",
    },
    text:{
        textAlign:"center",
    }
});
