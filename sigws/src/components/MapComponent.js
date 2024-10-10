import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers';
import { Container } from '@material-ui/core';

const MapComponent = (props) => {
  const { location } = props;
  const [map, setMap] = useState(null);
  const [geojsonData, setGeojsonData] = useState(null);

  // Define the custom icon for the markers
  const customIcon = L.icon({
    iconUrl: '/charging.jpg',  // Example icon from Icons8
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  useEffect(() => {
    let coordinates = [43.3628, -5.8457];
    let zoom = 13.5;

    if (location === 'gijon') {
      coordinates = [43.537385, -5.660194];
    }
    if (location === 'asturias') {
      zoom = 9;
    }

    const newMap = L.map('map').setView(coordinates, zoom);
    setMap(newMap);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(newMap);

    return () => {
      newMap.remove(); // Clean up map on unmount
    };
  }, [location]);

  // Fetch GeoJSON when location changes
  useEffect(() => {
    const fetchGeoJSON = async () => {
      let geojsonFile;
      switch (location) {
        case 'gijon':
          geojsonFile = '/cargadores_gijon.geojson';
          break;
        case 'oviedo':
          geojsonFile = '/cargadores_oviedo.geojson';
          break;
        case 'asturias':
        default:
          geojsonFile = '/cargadores.geojson';
          break;
      }

      try {
        const response = await fetch(geojsonFile);
        if (!response.ok) {
          throw new Error(`Error fetching GeoJSON: ${response.status}`);
        }
        const data = await response.json();
        setGeojsonData(data);
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
      }
    };

    fetchGeoJSON();
  }, [location]);

  // Add GeoJSON to the map when it's fetched
  useEffect(() => {
    if (map && geojsonData) {
      // Create a GeoJSON layer with the custom icon for markers
      const geojsonLayer = L.geoJSON(geojsonData, {
        pointToLayer: (feature, latlng) => {
          // Use the custom icon for each marker
          return L.marker(latlng, { icon: customIcon });
        }
      }).addTo(map);

      return () => {
        map.removeLayer(geojsonLayer); // Remove the previous GeoJSON layer when new data is loaded
      };
    }
  }, [map, geojsonData]);

  return (
      <Container maxWidth="lg">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
      </Container>
  );
};

export default MapComponent;
