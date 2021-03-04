import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/characters/Character.scss';

const Character = props => {

    const { name, image, gender, species, status, id } = props.character;

    return(
        <Link 
        className="link character"
        to={`/character/${id}`}>
        <img 
        className="character__img"
        src={image} 
        alt="Character"/>
        <div className="character__text">
        <h3 className="character__text--name" >{name}</h3>
        <p className="character__text--info">{gender}</p>
        <p className="character__text--info">{species}</p>
        <p className="character__text--info">{status}</p>
        </div>
        </Link>

    )
}

export default Character;