import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Import the CSS file
import axios from 'axios'; // For fetching GeoJSON data

function App() {
  const [geoData, setGeoData] = useState(null);

  // Fetch GeoJSON data
  useEffect(() => {
    axios
      .get('/src/assets/ParkConnectorLoop.geojson') // Replace with the correct path or URL
      .then((response) => {
        setGeoData(response.data); // Set the GeoJSON data
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Leaflet Map Example</h1>
      </div>
      <div className="map-container">
        <MapContainer center={[1.3521, 103.8198]} zoom={12} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geoData && (
            <GeoJSON
              data={geoData}
              style={{
                color: 'blue',
                weight: 2,
                opacity: 0.7,
              }}
              onEachFeature={(feature, layer) => {
                const featureName = feature.properties.PARK || 'No Name';
                layer.bindPopup(`<p>${featureName}</p>`);
              }}
            />
          )}
        </MapContainer>
      </div>
    </>
  );
}

export default App;