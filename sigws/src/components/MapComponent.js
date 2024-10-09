import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers';
import { Container } from '@material-ui/core';

const MapComponent = (props) => {

  let{location, geojson} = props
    const [map, setMap] = useState(null); 
     
    useEffect(() => {
      let coordenates = [43.3628, -5.8457]
      let zoom = 13.5 
      console.log(location)
      if(location === "gijon"){

        coordenates = [43.537385, -5.660194]
      }
      if(location === "asturias"){ 
        zoom = 9
      }
        const newMap = L.map('map').setView(coordenates, zoom);
        setMap(newMap);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(newMap);

        if (geojson) {
          L.geoJSON(geojson).addTo(newMap);
        }
        
        return () => {
          newMap.remove();
        }; 
      }, [location]);
    
      
  return ( 
    <Container maxWidth="lg">
        <div id="map" style={{ width: '100%', height: '500px' }}></div>
        
    </Container>)
};

export default MapComponent;
