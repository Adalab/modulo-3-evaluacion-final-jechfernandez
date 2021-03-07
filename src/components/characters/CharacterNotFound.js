import React from 'react';
import '../../stylesheets/characters/CharacterNotFound';
import ResetButton from '../ResetButton';

export default function CharacterNotFound() {
    return (
        <div className='notFound'>
            <p className="notFound__text">
        Your search for <span className="notFound__text--search">{search}</span> returned no results, bitch!
      </p>
      <img className="notFound__img" src={terry} alt="No results" />
      <ResetButton resetBtn={resetBtn} classResetBtn={'reset__notFound'} classResetIcon={'reset__notFound--icon'} />
        </div>
    )
}
