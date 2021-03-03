import React, { useEffect, useState } from 'react';
import '../App.scss';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDatafromApi';


const App = () => {

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('all');

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  },[]);

  const handleFilter = (inputChange) => {
    console.log(inputChange);
    if(inputChange.key === 'name') {
      setName(inputChange.value)
    }
    else if (inputChange.key === 'gender') {
      setGender(inputChange.value)
  }
  };

  const filterCharacter = characters.filter(character => {return character.name.toUpperCase().includes(name.toUpperCase())}).filter(character => {
    if (gender === 'all') {
      return true;
    } else {
      return character.gender === gender;
    }
  })
  
  return (
    <>
    <div className="App">
      <h1>Holi Jechi</h1>
      <Filter handleFilter={handleFilter}/>
      <CharacterList characters={filterCharacter} />
    </div>
    </>
  );
}

export default App;
