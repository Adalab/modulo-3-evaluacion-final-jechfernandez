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
      <div className="character__card">
        <img className="character__card--img" src={image} alt="Character" />

        <div className="character__card--name">
          <h3 className="character__card--text-name">{name} {statusIcon ()}</h3>
        </div>

        <div className="character__card--info">
          <p className="character__card--text-info">{gender}</p>
          <span className="character__card--text-info">{species}</span>
        </div>
      </div>
    </Link>
  );
};

export default Character;
