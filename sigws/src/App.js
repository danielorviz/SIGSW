import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route exact path="/" element={<MapComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
