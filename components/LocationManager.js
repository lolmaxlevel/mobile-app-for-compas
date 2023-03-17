import * as Location from "expo-location";
let subscription

export default class LocationManager {
    askPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        return status === 'granted';
    }
    startLocation = async () =>{
        subscription = await Location.watchPositionAsync(
            { accuracy: Location.Accuracy.BestForNavigation, timeInterval: 100, distanceInterval: 0 },
            location => console.log(location)
        );
    }
    stopLocation = async () => {
        subscription.remove()
    }
}