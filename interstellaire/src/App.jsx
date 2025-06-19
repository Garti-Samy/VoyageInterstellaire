// Importer les Routes de react router-dom pour naviguer entre chaque page
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'


import ScrollToTop from './ScrollToTop';

// Importer les composants principaux
import Header from './components/Header';
import Accueil from './components/Accueil';
import Planetes from './components/Planetes';
import Galaxies from './components/Galaxies';
import TrousNoirs from './components/TrousNoirs';



function App() {

  const links = [
    { name: 'Accueil', path: '/accueil' },
    { name: 'Système Solaire', path: '/systeme' },
    { name: 'Galaxies', path: '/galaxies' },
    { name: 'Trous-Noir', path: '/trous' }
  ];


  return (
    <>
      <BrowserRouter basename='interstellaire' >
        {/* Header avec les liens */}
        <Header task={links}  />

        {/* Configuration des routes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/systeme" element={<Planetes />} />
          <Route path="/galaxies" element={<Galaxies />} />
          <Route path="/trous" element={<TrousNoirs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
