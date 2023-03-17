import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as Location from 'expo-location';
import MainPage from "./components/MainPage";
import * as TaskManager from 'expo-task-manager';

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const aboba = (data) => {
        console.log("aboba", data)
    }
    useEffect(() => {
        (async () => {
            TaskManager.defineTask("aboba", async ({ data: { locations }, error }) => {
                if (error) {
                    console.error(error);
                    return;
                }
                const [location] = locations;
                try {
                   console.log(location)
                } catch (err) {
                    console.error(err);
                }
            });

// 2 start the task
            await Location.startLocationUpdatesAsync("aboba", {
                accuracy: Location.Accuracy.Highest,
                distanceInterval: 0, // minimum change (in meters) betweens updates
                deferredUpdatesInterval: 100, // minimum interval (in milliseconds) between updates
                // foregroundService is how you get the task to be updated as often as would be if the app was open
                foregroundService: {
                    notificationTitle: 'Using your location',
                    notificationBody: 'To turn off, go back to the app and switch something off.',
                },
            });
            // let { status } = await Location.requestForegroundPermissionsAsync();
            // if (status !== 'granted') {
            //     setErrorMsg('Permission to access location was denied');
            //     return;
            // }
            //
            // let location = await Location.getCurrentPositionAsync({});
            // setLocation(location);
            //
            // const subscription = await Location.watchPositionAsync(
            //     { accuracy: Location.Accuracy.BestForNavigation, timeInterval: 100, distanceInterval: 0 },
            //     location => console.log(location)
            // );
            //
            // return () => subscription.remove();
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/*{location ? (*/}
            {/*    <Text>*/}
            {/*        Latitude: {location.coords.latitude}, Longitude:{' '}*/}
            {/*        {location.coords.longitude}*/}
            {/*        elev: {location.coords.altitudeAccuracy}*/}
            {/*    </Text>*/}
            {/*) : (*/}
            {/*    <Text>Loading...</Text>*/}
            {/*)}*/}
            <MainPage/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});