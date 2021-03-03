import React from 'react';

const CharacterList = props => {

    
    return(
        <>
        <img src={props.character.image} alt=""/>
        <h3>{props.character.name}</h3>
        <p>{props.character.gender} {props.character.status}</p>
        </>

    )
}

export default CharacterList;