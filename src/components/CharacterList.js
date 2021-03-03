import React from 'react';
import Character from './Character';

const CharacterList = props => {

    const characterElements = props.characters.map(character => {
        return (
            <li key={character.id}>
               <Character character={character}/> 
            </li>
        )
    })
    return(
        <>
        <section>
            <ul>
                {characterElements}
            </ul>
        </section>
        </>
    )
}

export default CharacterList;