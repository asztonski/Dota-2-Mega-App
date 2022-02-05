import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomeScreen,
  PlayersScreen,
  PlayerDetailsScreen,
  HeroesScreen,
  ItemsScreen,
} from './screens';
import './App.scss';

function App() {
  return (
    <Router>
      {/* TODO: Navbar here? */}
      <Routes>
        <Route path='/players' element={<PlayersScreen />} />
        <Route path='/players/:playerId' element={<PlayerDetailsScreen />} />
        <Route path='/heroes' element={<HeroesScreen />} />
        <Route path='/items' element={<ItemsScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
