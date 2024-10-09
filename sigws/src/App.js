import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MapComponent from './components/MapComponent';
import FilterComponent from "./components/filters";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <div className="main-container">
          {/* Left: Filter component */}
          <div className="filter-container">
            <FilterComponent />
          </div>

          {/* Right: Map component */}
          <div className="map-container">
            <Routes>
              <Route exact path="/" element={<MapComponent location="asturias" geojson={null} />} />
              <Route exact path="/oviedo" element={<MapComponent location="oviedo" geojson={null} />} />
              <Route exact path="/gijon" element={<MapComponent location="gijon" geojson={null} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
