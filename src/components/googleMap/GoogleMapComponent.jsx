// GoogleMap.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '200px',
};

const center = {
  lat: 37.7749, // Default Latitude (e.g., San Francisco)
  lng: -122.4194, // Default Longitude (e.g., San Francisco)
};

const GoogleMapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState(center);

  // Use the Geolocation API to get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log('Error getting location', error);
        }
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API}>
      <GoogleMap
        className="rounded-lg"
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={10}
      >
        <Marker position={currentPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
