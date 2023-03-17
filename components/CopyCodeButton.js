import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, ToastAndroid} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from 'expo-clipboard';
export default function CopyCodeButton() {
    const [buttonText, setButtonText] = useState("copy the code")
    const copyCode = async () => {
        const value = await AsyncStorage.getItem('unique_code')
        if (value !== null) {
            await Clipboard.setStringAsync(value)
        }
        else {
            let value = generateCode();
            await AsyncStorage.setItem('unique_code', value.toString());
            await Clipboard.setStringAsync(value)
        }
        setButtonText(value)
        ToastAndroid.show('Copied!', ToastAndroid.SHORT);
    }
    const generateCode = () => {
        // generate 6 digit code without 0 in the beginning
        return Math.floor(Math.random() * 900000) + 100000
    }

    return (
        <Pressable  onPress={() => copyCode()} style={
            (
                {pressed}) => [
            {
                backgroundColor: pressed ? 'rgb(210, 230, 255)': "black",
            },
            styles.button,
        ]}>
            <Text style={styles.text}>{buttonText}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});