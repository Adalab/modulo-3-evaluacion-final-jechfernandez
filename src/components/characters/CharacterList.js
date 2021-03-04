import React from 'react';
import '../../stylesheets/characters/CharacterList.scss';
import Character from './Character';

const CharacterList = props => {
  const characterElements = props.characters.map (character => {
    return (
      <li className="character__list" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <article className="character__article">
      <ul className="list">
        {characterElements}
      </ul>
    </article>
  );
};

export default CharacterList;
