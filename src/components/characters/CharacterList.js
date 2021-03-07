import React from 'react';
import '../../stylesheets/characters/CharacterList.scss';
import Character from './Character';
import geez from '../../images/404.jpg'

function CharacterList(props) {
  const characterElements = props.characters.map(character => {
      return <li key={character.id} className="character__list"> <Character character={character} /> </li>
  })
  if (characterElements.length === 0) {
      return (
        <div className="detail__error">
        
        <div className="detail__error--img">
          <img
            className="detail__error--img-src"
            src={geez}
            alt="Error, not found"
          />
        </div>
      </div>
      )
  } else {

      return (
        <article className="character__article">
               <ul className="list">
                 {characterElements}
               </ul>
             </article>
      );
  }
}
export default CharacterList;

