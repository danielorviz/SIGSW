import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers';
import { Container } from '@material-ui/core';

const MapComponent = () => {

    const [map, setMap] = useState(null);

    useEffect(() => {
        const newMap = L.map('map').setView([43.5320141, -5.6543232], 13);
        setMap(newMap);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(newMap);
    
        return () => {
          newMap.remove();
        };
      }, []);
    
      
  return ( 
    <Container maxWidth="lg">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
        
    </Container>)
};

export default MapComponent;
