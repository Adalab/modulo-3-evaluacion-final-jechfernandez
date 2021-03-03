import React from 'react';
import '../App.scss';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDatafromApi';


function App() {
  return (
    <>
    <div className="App">
      <h1>Holi Jechi</h1>
      <CharacterList />
    </div>
    </>
  );
}

export default App;
