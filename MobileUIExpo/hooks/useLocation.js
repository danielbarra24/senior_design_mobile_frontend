import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const startLocationUpdates = async () => {
      try {
        // Request location permissions
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("permission");
          return;
        }

        // Start watching for location updates
        const subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (newLocation) => {
            setLocation(newLocation);
          }
        );

        return () => {
          // Stop watching for location updates when the component unmounts
          if (subscription) {
            subscription.remove();
          }
        };
      } catch (error) {
        console.error("Error starting location updates:", error);
        setErrorMsg("Error getting location updates");
      }
    };

    startLocationUpdates();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return { location, errorMsg };
};

export default useLocation;
