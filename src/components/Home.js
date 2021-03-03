import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDatafromApi';


const Home = () => {

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('all');
  const [species, setSpecies] = useState('all');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    getDataFromApi().then(data => setCharacters(data));
  },[]);

  const handleFilter = (inputChange) => {
    if(inputChange.key === 'name') {
      setName(inputChange.value);
    }
    else if (inputChange.key === 'gender') {
        setGender(inputChange.value);
      }
      else if (inputChange.key === 'species') {
        setSpecies(inputChange.value);
      }
      else if (inputChange.key === 'status') {
        setStatus(inputChange.value);
      }
  };

  const filterCharacter = characters.filter(character => {return character.name.toUpperCase().includes(name.toUpperCase());
  })
  
  .filter(character => {
    if (gender === 'all') {
      return true;
    } else {
      return character.gender === gender;
    }
  })

  .filter(character => {
    if (species === 'all') {
      return true;
    } else {
      return character.species === species;
    }
  })
  
  .filter(character => {
    if (status === 'all') {
      return true;
    } else {
      return character.status === status;
    }
  });

  
  
  console.log(filterCharacter);

  return (
    
    <div className="Home">
      <Filter handleFilter={handleFilter}/>
      <CharacterList characters={filterCharacter} />
    </div>
    
  );
}

export default Home;