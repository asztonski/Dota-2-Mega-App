import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen, StatScreen, HeroesScreen, ItemsScreen } from './screens';
import './App.css';

function App() {
  return (
    <Router>
      {/* TODO: Navbar here? */}
      <Routes>
        <Route path='/players' element={<StatScreen />} />
        <Route path='/heroes' element={<HeroesScreen />} />
        <Route path='/items' element={<ItemsScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
