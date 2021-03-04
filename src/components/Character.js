import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Character.scss';

const Character = props => {

    const { name, image, gender, species, status, id } = props.character;

    return(
        <Link to={`/character/${id}`}>
        <img src={image} alt="Character"/>
        <h3>{name}</h3>
        <p>{gender} {species} {status}</p>
        </Link>

    )
}

export default Character;