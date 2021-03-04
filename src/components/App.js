import '../stylesheets/App.scss';
import React, {useEffect, useState} from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/getDatafromApi';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';

function App () {
  const [characters, setCharacters] = useState ([]);
  const [name, setName] = useState ('');
  const [gender, setGender] = useState ('all');
  const [species, setSpecies] = useState ('all');
  const [status, setStatus] = useState ('all');

  useEffect (() => {
    getDataFromApi ().then (data => setCharacters (data));
  }, []);

  const handleFilter = inputChange => {
    if (inputChange.key === 'name') {
      setName (inputChange.value);
    } else if (inputChange.key === 'gender') {
      setGender (inputChange.value);
    } else if (inputChange.key === 'species') {
      setSpecies (inputChange.value);
    } else if (inputChange.key === 'status') {
      setStatus (inputChange.value);
    }
  };

  const renderDetail = (props) => {
    console.log(props.match.params);
    const id = parseInt(props.match.params.id);
  }

  const filterCharacter = characters
    .filter (character => {
      return character.name.toUpperCase ().includes (name.toUpperCase ());
    })
    .filter (character => {
      if (gender === 'all') {
        return true;
      } else {
        return character.gender === gender;
      }
    })
    .filter (character => {
      if (species === 'all') {
        return true;
      } else {
        return character.species === species;
      }
    })
    .filter (character => {
      if (status === 'all') {
        return true;
      } else {
        return character.status === status;
      }
    });

  console.log (filterCharacter);

  return (
    <div className="landing">
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} />
            <CharacterList characters={filterCharacter} />
          </Route>
          <Route path="/character/:id" render={renderDetail} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
