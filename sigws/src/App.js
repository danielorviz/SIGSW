
import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';
import FilterComponent from "./components/Filters";
import Modal from "./components/Modal";

function App() {

  const [geojsonGijon, setGeojsonGijon] = useState(null);
  const [showFilters, setShowFilters] = useState(false);


  useEffect(() => {


    fetchGeoJSON();
  }, []);

  const fetchGeoJSON = async () => {
    const response = await fetch('/cargadores_gijon.geojson');
    const data = await response.json();
    setGeojsonGijon(data);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };


  return (
    <div className="App">
      <Router>
        <Header toggleFilters={toggleFilters} />
        <div className="main-container">
          <div className="map-container">
            <Routes>
              <Route exact path="/" element={<MapComponent location="asturias" geojson={null} />} />
              <Route exact path="/oviedo" element={<MapComponent location="oviedo" geojson={null} />} />
              <Route exact path="/gijon" element={<MapComponent location="gijon" geojson={geojsonGijon} />} />
            </Routes>
          </div>
        </div>
        <Footer />
        <Modal isOpen={showFilters} onClose={toggleFilters}>
          <FilterComponent />
        </Modal>
      </Router>
    </div>
  );
}

export default App;
