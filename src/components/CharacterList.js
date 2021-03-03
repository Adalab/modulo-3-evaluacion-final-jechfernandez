import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return(
        <>
        <section>
            <ul>
                <li>
                    <Character />
                </li>
            </ul>
        </section>
        </>
    )
}

export default CharacterList;