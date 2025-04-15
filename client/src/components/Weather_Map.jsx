import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import hurricaneGeoJsonUrl from './current_hurricane.geojson'; // 👈 Import the static GeoJSON file
import L from 'leaflet';
import hurricaneIconUrl from './hurricane-icon.png'; 

const WeatherMap = () => {
  const [hurricanes, setHurricanes] = useState([]);
  const [geoJsonData, setGeoJsonData] = useState(null);
  const floridaBounds = new LatLngBounds([24.396308, -81.603506], [31.000968, -79.974307]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load GeoJSON from local file
    fetch(hurricaneGeoJsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setGeoJsonData(data);
      })
      .catch((err) => {
        console.error("Failed to load GeoJSON:", err);
      });
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const hurricaneIcon = new L.Icon({
    iconUrl: hurricaneIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <button
        onClick={goToDashboard}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        Back to Dashboard
      </button>

      <MapContainer
        center={[27.9944024, -81.7602544]}
        zoom={7}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
        bounds={floridaBounds}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Auto-loaded GeoJSON Layer */}
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            pointToLayer={(feature, latlng) => {
              return L.marker(latlng, { icon: hurricaneIcon });
            }}
          />
        )}

        {/* Example Hurricane Markers */}
        {hurricanes.map((hurricane, index) => (
          <Marker key={index} position={[hurricane.lat, hurricane.lon]}>
            <Popup>{hurricane.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
