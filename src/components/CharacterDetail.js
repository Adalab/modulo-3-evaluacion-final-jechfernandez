import React from 'react';
import { Link } from 'react-router-dom'

const CharacterDetail = props => {

  const { routerProps, api } = props;
    const characterId = parseInt(routerProps.match.params.characterId);

    if (characterId > api.length) {
        return (
            <div>
                <p>Sorry, we don't really know what you're looking for. There’s a lesson here and I’m not going to be the one to figure it out.</p>
                <Link to="/" >Back to homepage</Link>
            </div>
        );
    }
  return (
    <div className="CharacterDetail">
      <h1>Holi</h1>
    </div>
  );
};

export default CharacterDetail;
