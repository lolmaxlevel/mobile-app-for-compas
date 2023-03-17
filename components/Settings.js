import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Pressable, Image, Switch, TextInput} from 'react-native';

export default function Settings() {

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    return (

        <View>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                value={isEnabled1}
            />
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
            />
            <TextInput></TextInput>
            <Text>Settings</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        textAlign: "center",
    },
    image: {
        marginBottom : 100,
        width: 100,
        height: 100,
        alignSelf: "center",
    }
});
