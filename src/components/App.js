import React, { useEffect, useState } from 'react';
import '../App.scss';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDatafromApi';


const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  },[]);
  return (
    <>
    <div className="App">
      <h1>Holi Jechi</h1>
      <Filter />
      <CharacterList characters={characters} />
    </div>
    </>
  );
}

export default App;
