
import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';
import FilterComponent from "./components/Filters";
import Modal from "./components/Modal";

function App() {

  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
  }, []);
  
  
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
              <Route exact path="/" element={<MapComponent location="asturias" />} />
              <Route exact path="/oviedo" element={<MapComponent location="oviedo" />} />
              <Route exact path="/gijon" element={<MapComponent location="gijon" />} />
            </Routes>
          </div>
        </div>
        <Footer />
        <Modal isOpen={showFilters} onClose={toggleFilters}>
          <FilterComponent onFilterChange={(filters) => console.log(filters)} onClose={toggleFilters}/>
        </Modal>
      </Router>
    </div>
  );
}

export default App;
