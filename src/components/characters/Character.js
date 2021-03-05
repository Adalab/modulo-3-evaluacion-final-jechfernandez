import React from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/characters/Character.scss';

const Character = props => {
  const {name, image, gender, species, status, id} = props.character;

  const statusIcon = () => {
    if (status === 'Alive') {
      return <i className="fas fa-heartbeat" />;
    } else if (status === 'Dead') {
      return <i className="fas fa-skull" />;
    } else {
      return <i className="fas fa-question" />;
    }
  };

  return (
    <Link className="link character" to={`/character/${id}`}>
      <div className="card">
        <img className="character__img" src={image} alt="Character" />

        <div className="character__text">
          <h3 className="character__text--name">{name} {statusIcon ()}</h3>
          <p className="character__text--info">{gender}</p>
          <p className="character__text--info">{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;
